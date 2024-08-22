import { renderHook, act } from "@testing-library/react-hooks";
import { useGetPokemons } from "@/hooks/useGetPokemons/useGetPokemons";

jest.mock("swr", () => ({
    __esModule: true,
    default: jest.fn(),
}));

const mockSWR = jest.requireMock("swr").default;

describe("usePokemonOptions", () => {
    beforeEach(() => {
        jest.useFakeTimers();
        mockSWR.mockClear();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it("should return initial state", () => {
        mockSWR.mockReturnValue({ data: undefined, isLoading: false });

        const { result } = renderHook(() => useGetPokemons());

        expect(result.current.pokemonOptions).toBeUndefined();
        expect(result.current.isLoading).toBeFalsy();
    });

    it("should not fetch data for empty search term", () => {
        mockSWR.mockReturnValue({ data: undefined, isLoading: false });

        const { result } = renderHook(() => useGetPokemons());

        act(() => {
            result.current.setSearchTerm("");
        });

        jest.advanceTimersByTime(1000);

        expect(mockSWR).toHaveBeenCalledWith(null, expect.any(Function), expect.any(Object));
    });
});
