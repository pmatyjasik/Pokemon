import { render, screen } from "@testing-library/react";
import { Label, LabelProps } from "@/components/Label/Label";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme";

const renderComponent = (props: LabelProps) => {
    return render(
        <ThemeProvider theme={theme}>
            <Label {...props} />
        </ThemeProvider>
    );
};

const testValue = "Test label";

describe("Label component", () => {
    it("Matches DOM Snapshot", () => {
        const { asFragment } = renderComponent({ label: testValue });

        expect(asFragment()).toMatchSnapshot();
    });

    it("renders the label with correct text", () => {
        renderComponent({ label: testValue });

        expect(screen.getByText(testValue)).toBeInTheDocument();
    });
});
