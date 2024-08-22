import { cleanup, render, screen } from "@testing-library/react";
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

const label = "Test Input";

const defaultProps = {
    label,
} satisfies LabelProps;

describe("Label component", () => {
    afterEach(() => {
        cleanup();
    });

    it("Matches DOM Snapshot", () => {
        const { asFragment } = renderComponent(defaultProps);

        expect(asFragment()).toMatchSnapshot();
    });

    it("renders the label with correct text", () => {
        renderComponent(defaultProps);

        expect(screen.getByText(label)).toBeInTheDocument();
    });
});
