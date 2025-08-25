import { NextResponse } from "next/server";

export async function GET() {
    try {
        const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
        const clientId = process.env.SPOTIFY_CLIENT_ID;
        const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

        const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Basic " + Buffer.from(clientId + ":" + clientSecret).toString("base64")
            },
            body: new URLSearchParams({
                grant_type: "refresh_token",
                refresh_token: refreshToken as string
            })
        });

        const tokenData = await tokenResponse.json();

        const response = await fetch(
            "https://api.spotify.com/v1/me/player",
            {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${tokenData.access_token}`
                },
                method: "GET"
            }
        );

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error fetching Spotify player:", error);
        return NextResponse.json({
            is_playing: false
        });
    }
}
