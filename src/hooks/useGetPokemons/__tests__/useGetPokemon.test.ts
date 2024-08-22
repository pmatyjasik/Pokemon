import { renderHook } from "@testing-library/react-hooks";
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
});
