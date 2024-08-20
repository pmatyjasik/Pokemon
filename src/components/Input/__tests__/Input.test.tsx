import { render, screen } from "@testing-library/react";
import { Input, InputProps } from "@/components/Input/Input";
import { theme } from "@/theme";
import { ThemeProvider } from "@mui/material";

describe("Input Component", () => {
    const renderComponent = (props: InputProps) => {
        return render(
            <ThemeProvider theme={theme}>
                <Input {...props} />
            </ThemeProvider>
        );
    };

    const testValue = "Test Input";

    it("Matches DOM Snapshot", () => {
        const { asFragment } = renderComponent({ placeholder: testValue });
        expect(asFragment()).toMatchSnapshot();
    });

    test("renders the Input component", () => {
        renderComponent({ placeholder: testValue });

        const inputElement = screen.getByPlaceholderText(testValue);
        expect(inputElement).toBeInTheDocument();
    });
});
