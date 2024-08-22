import useSWR from "swr";
import { useDebounce } from "use-debounce";
import { Dispatch, SetStateAction, useState } from "react";
import { fetcher } from "@/utils/utils";
import { PokemonOption } from "@/models/pokemon";

interface UseGetPokemonsReturn {
    pokemonOptions: PokemonOption[] | undefined;
    isLoading: boolean;
    searchTerm: string | null;
    setSearchTerm: Dispatch<SetStateAction<string | null>>;
}

export const useGetPokemons = (): UseGetPokemonsReturn => {
    const [searchTerm, setSearchTerm] = useState<string | null>(null);
    const [debouncedSearchTerm] = useDebounce(searchTerm, 500);

    const { data: pokemonOptions, isLoading } = useSWR<PokemonOption[]>(
        `/api/pokemon?name=${debouncedSearchTerm}`,
        fetcher
    );

    return {
        pokemonOptions,
        isLoading,
        searchTerm,
        setSearchTerm,
    };
};
