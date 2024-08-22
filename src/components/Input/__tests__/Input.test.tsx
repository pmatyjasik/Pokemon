import { cleanup, render, screen } from "@testing-library/react";
import { Input, InputProps } from "@/components/Input/Input";
import { theme } from "@/theme";
import { ThemeProvider } from "@mui/material";

const renderComponent = (props: InputProps) => {
    return render(
        <ThemeProvider theme={theme}>
            <Input {...props} />
        </ThemeProvider>
    );
};

const placeholder = "Test Input";

const defaultProps = {
    placeholder,
} satisfies InputProps;

describe("Input Component", () => {
    afterEach(() => {
        cleanup();
    });

    it("Matches DOM Snapshot", () => {
        const { asFragment } = renderComponent(defaultProps);

        expect(asFragment()).toMatchSnapshot();
    });

    test("renders the Input component", () => {
        renderComponent(defaultProps);

        const inputElement = screen.getByPlaceholderText(placeholder);

        expect(inputElement).toBeInTheDocument();
    });
});
