import useSWR from "swr";
import { Dispatch, SetStateAction, useMemo, useState } from "react";
import { fetcher } from "@/utils/utils";
import { Pokemon } from "@/models/pokemon";

interface UsePokemonDetailsReturn {
    pokemon: Pokemon | null;
    isLoading: boolean;
    pokemonName: string | null;
    setPokemonName: Dispatch<SetStateAction<string | null>>;
}

export const usePokemonDetails = (): UsePokemonDetailsReturn => {
    const [pokemonName, setPokemonName] = useState<string | null>(null);

    const { data, isLoading } = useSWR<Pokemon>(
        pokemonName ? `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}` : null,
        fetcher
    );

    const pokemon: Pokemon | null = useMemo(() => {
        if (!data) return null;
        return {
            name: data.name,
            id: data.id,
            base_experience: data.base_experience,
            types: data.types,
            sprites: { front_default: data.sprites.front_default },
        };
    }, [data]);

    return {
        pokemon,
        isLoading,
        pokemonName,
        setPokemonName,
    };
};
