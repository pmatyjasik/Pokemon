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
    it("returns empty pokemon array when no name is provided", async () => {
        const mockRequest = createMockRequest();

        const response = await GET(mockRequest);
        const data = await response.json();

        expect(data).toHaveLength(0);
    });

    it("returns filtered pokemon when a name is provided", async () => {
        const mockRequest = createMockRequest("name=pikachu");

        const response = await GET(mockRequest);
        const data = await response.json();

        expect(data.length).toBeGreaterThan(0);
        expect(data.length).toBeLessThan(pokemonData.data.length);
        expect(data[0].name.toLowerCase()).toContain("pikachu");
    });

    it("returns an empty array when no pokemon match the search", async () => {
        const mockRequest = createMockRequest("name=nonexistentpokemon");

        const response = await GET(mockRequest);
        const data = await response.json();

        expect(data).toHaveLength(0);
    });
});
