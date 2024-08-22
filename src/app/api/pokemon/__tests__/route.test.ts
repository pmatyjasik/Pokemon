import { NextRequest } from "next/server";
import { GET } from "@/api/pokemon/route";
import pokemonData from "@/public/data/pokemon.json";

jest.mock("next/server", () => ({
    NextResponse: {
        json: jest.fn().mockImplementation((data) => ({ json: () => data })),
    },
    NextRequest: jest.fn().mockImplementation((input) => ({
        url: input,
        nextUrl: new URL(input),
    })),
}));

const createMockRequest = (searchParams?: string): NextRequest => {
    const fullUrl = `http://localhost/api/pokemon${searchParams ? `?${searchParams}` : ""}`;
    return new NextRequest(fullUrl);
};

describe("GET Pokemons function", () => {
    it("returns pokemon array when no name is provided", async () => {
        const mockRequest = createMockRequest();

        const response = await GET(mockRequest);
        const data = await response.json();

        expect(data).toHaveLength(pokemonData.data.length);
    });

    it("returns pokemon when a name is provided", async () => {
        const mockRequest = createMockRequest("name=bulbasaur");

        const response = await GET(mockRequest);
        const data = await response.json();

        expect(data.length).toBeGreaterThan(0);
        expect(data.length).toBeLessThan(pokemonData.data.length);
        expect(data[0].name.toLowerCase()).toContain("bulbasaur");
    });
});
