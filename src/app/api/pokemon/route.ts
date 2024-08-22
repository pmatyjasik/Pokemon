import { NextResponse } from "next/server";
import Fuse from "fuse.js";
import { PokemonOption } from "@/models/pokemon";
import pokemonData from "@/public/data/pokemon.json";

const fuse = new Fuse<PokemonOption>(pokemonData.data, {
    keys: ["name"],
    threshold: 0.9,
    ignoreLocation: true,
    findAllMatches: true,
    shouldSort: false,
});

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name");

    if (!name || name === "") {
        return NextResponse.json<PokemonOption[]>(
            pokemonData.data.map(({ id, name }) => ({
                id,
                name,
            }))
        );
    }

    const results = fuse.search(name);

    return NextResponse.json<PokemonOption[]>(
        results.map(({ item }) => ({
            id: item.id,
            name: item.name,
        }))
    );
}
