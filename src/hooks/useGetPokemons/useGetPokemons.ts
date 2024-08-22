import useSWR from "swr";
import { useDebounce } from "use-debounce";
import { useState } from "react";
import { fetcher } from "@/utils/utils";
import { PokemonOption } from "@/models/pokemon";


interface UseGetPokemonsReturn {
    pokemonOptions: PokemonOption[] | undefined;
    isLoading: boolean;
    searchTerm: string | null;
    setSearchTerm: (searchTerm: string | null) => void;
}

export const useGetPokemons = (debounceTime: number = 1000): UseGetPokemonsReturn => {
    const [searchTerm, setSearchTerm] = useState<string | null>(null);
    const [debouncedSearchTerm] = useDebounce(searchTerm, debounceTime);

    const { data: pokemonOptions, isLoading } = useSWR<PokemonOption[]>(
        debouncedSearchTerm && debouncedSearchTerm.trim() !== "" ? `/api/pokemon?name=${debouncedSearchTerm}` : null,
        fetcher,
        {
            revalidateOnFocus: false,
        }
    );

    return {
        pokemonOptions,
        isLoading,
        searchTerm,
        setSearchTerm,
    };
};
