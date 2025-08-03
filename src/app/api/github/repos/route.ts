import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const pinned = searchParams.get('pinned') === 'true';

    const query = `
      query {
        user(login: "himonshuuu") {
          ${pinned ? `
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
                  stargazerCount
                  forkCount
                }
              }
            }
          ` : `
            repositories(first: 100, privacy: PUBLIC, orderBy: {field: UPDATED_AT, direction: DESC}) {
              nodes {
                name
                description
                url
                primaryLanguage {
                  name 
                  color
                }
                stargazerCount
                forkCount
              }
            }
          `}
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

    return NextResponse.json(pinned ? data.user.pinnedItems.nodes : data.user.repositories.nodes);
}