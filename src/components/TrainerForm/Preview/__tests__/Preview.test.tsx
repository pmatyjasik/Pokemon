import React from "react";
import { render, screen } from "@testing-library/react";
import { Preview, PreviewProps } from "@/components/TrainerForm/Preview/Preview";
import { theme } from "@/theme";
import { ThemeProvider } from "@mui/material";

const renderComponent = (props: PreviewProps) => {
    return render(
        <ThemeProvider theme={theme}>
            <Preview {...props} />
        </ThemeProvider>
    );
};

jest.mock("next/image", () => ({
    __esModule: true,
    default: (props: any) => <img {...props} />,
}));

const pokemon = {
    name: "Pikachu",
    sprites: { front_default: "/pikachu.png" },
    types: [{ type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" } }],
    base_experience: 112,
    id: 25,
};

describe("Preview Component", () => {
    it("Matches DOM Snapshot", () => {
        const { asFragment } = renderComponent({ pokemon: pokemon, isLoading: true });

        expect(asFragment()).toMatchSnapshot();
    });

    test("renders loading state", () => {
        renderComponent({ pokemon, isLoading: true });

        expect(screen.getByRole("progressbar")).toBeInTheDocument();
    });

    test("renders empty state", () => {
        renderComponent({ pokemon: null, isLoading: false });

        expect(screen.getByText("Your pokemon")).toBeInTheDocument();
    });

    test("renders pokemon data", () => {
        renderComponent({ pokemon, isLoading: false });

        expect(screen.getByText("Name: Pikachu")).toBeInTheDocument();
        expect(screen.getByText("Types:")).toBeInTheDocument();
        expect(screen.getByText("electric")).toBeInTheDocument();
        expect(screen.getByText("Base experience: 112")).toBeInTheDocument();
        expect(screen.getByText("ID: 25")).toBeInTheDocument();
        expect(screen.getByAltText("Pikachu")).toHaveAttribute("src", "/pikachu.png");
    });
});
