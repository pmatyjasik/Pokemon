import { renderHook, act } from "@testing-library/react-hooks";
import { usePokemonDetails } from "@/hooks/usePokemonDetails/usePokemonDetails";

jest.mock("swr", () => ({
    __esModule: true,
    default: jest.fn(() => ({
        data: undefined,
        isLoading: false,
    })),
}));

jest.mock("@/utils/utils", () => ({
    fetcher: jest.fn(),
}));

describe("usePokemonDetails", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should initialize with null pokemonName and pokemon", () => {
        const { result } = renderHook(() => usePokemonDetails());

        expect(result.current.pokemonName).toBeNull();
        expect(result.current.pokemon).toBeNull();
        expect(result.current.isLoading).toBeFalsy();
    });

    it("should update pokemonName when setPokemonName is called", () => {
        const { result } = renderHook(() => usePokemonDetails());

        act(() => {
            result.current.setPokemonName("pikachu");
        });

        expect(result.current.pokemonName).toBe("pikachu");
    });

    it("should fetch pokemon data when pokemonName is set", async () => {
        const mockPokemonData = {
            name: "pikachu",
            id: 25,
            base_experience: 112,
            types: [{ type: { name: "electric" } }],
            sprites: { front_default: "https://example.com/pikachu.png" },
        };

        (require("swr").default as jest.Mock).mockReturnValue({
            data: mockPokemonData,
            isLoading: false,
        });

        const { result, rerender } = renderHook(() => usePokemonDetails());

        act(() => {
            result.current.setPokemonName("pikachu");
        });

        rerender();

        expect(result.current.pokemon).toEqual(mockPokemonData);
        expect(result.current.isLoading).toBeFalsy();
    });

    it("should handle loading state", () => {
        (require("swr").default as jest.Mock).mockReturnValue({
            data: undefined,
            isLoading: true,
        });

        const { result } = renderHook(() => usePokemonDetails());

        expect(result.current.isLoading).toBeTruthy();
        expect(result.current.pokemon).toBeNull();
    });
});
