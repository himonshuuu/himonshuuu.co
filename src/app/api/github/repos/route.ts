import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const pinned = searchParams.get('pinned') === 'true';
    const topStars = searchParams.get('topStars') === 'true';

    const query = `
      query {
        user(login: "himonshuuu") {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                name
                description
                url
                primaryLanguage {
                  name
                  color
                }
                languages(first: 10) {
                  edges {
                    size
                    node {
                      name
                      color
                    }
                  }
                }
                stargazerCount
                forkCount
                owner {
                  login
                  __typename
                }
              }
            }
          }
          repositories(first: 100, privacy: PUBLIC, orderBy: {field: UPDATED_AT, direction: DESC}) {
            nodes {
              name
              description
              url
              primaryLanguage {
                name 
                color
              }
              languages(first: 10) {
                edges {
                  size
                  node {
                    name
                    color
                  }
                }
              }
              stargazerCount
              forkCount
              owner {
                login
                __typename
              }
            }
          }
        }
      }
    `;

    const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query })
    });

    const { data } = await response.json();

    if (!data?.user) {
        return NextResponse.json([]);
    }

    // Helper to extract/format all language nodes for each repo
    function mapLanguages(languages: any) {
        if (!languages?.edges) return [];
        return languages.edges.map((edge: any) => ({
            name: edge.node.name,
            color: edge.node.color,
            size: edge.size,
        }));
    }

    // Format repo node to include all languages used, remove 'owner' from returned object
    function formatRepo(repo: any) {
        const { owner, ...rest } = repo;
        return {
            ...rest,
            languages: mapLanguages(repo.languages),
        };
    }

    const isUserOwned = (repo: any) => {
        // Only keep repos that are owned directly by the user
        return repo.owner && repo.owner.login === "himonshuuu" && repo.owner.__typename === "User";
    };

    let result = [];

    if (pinned) {
        // Filter out any pinned repos not owned by the user
        result = data.user.pinnedItems.nodes.filter(isUserOwned).map(formatRepo);
    } else if (topStars) {
        // Only user-owned repos sorted by stargazerCount
        result = data.user.repositories.nodes
            .filter(isUserOwned)
            .sort((a: any, b: any) => b.stargazerCount - a.stargazerCount)
            .slice(0, 6)
            .map(formatRepo);
    } else {
        // All user-owned repos
        result = data.user.repositories.nodes
            .filter(isUserOwned)
            .map(formatRepo);
    }

    return NextResponse.json(result);
}