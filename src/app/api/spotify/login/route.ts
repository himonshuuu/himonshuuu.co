import { NextResponse } from "next/server";

export async function GET() {
    const scope = 'user-read-playback-state user-read-currently-playing';

    const params = new URLSearchParams({
        response_type: 'code',
        client_id: process.env.SPOTIFY_CLIENT_ID as string,
        scope,
        redirect_uri: "http://localhost:3000/api/spotify/callback"
    });

    return NextResponse.redirect(`https://accounts.spotify.com/authorize?${params.toString()}`);
}