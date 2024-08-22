export interface PokemonOption {
    name: string;
    id: number;
}

export interface PokemonType {
    type: {
        name: string;
        url: string;
    };
}

export interface Pokemon {
    name: string;
    id: number;
    base_experience: number;
    types: PokemonType[];
    sprites: {
        front_default: string;
    };
}
