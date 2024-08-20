import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import { ErrorHint, ErrorHintProps } from "@/components/ErrorHint/ErrorHint";
import { theme } from "@/theme";

const renderComponent = (props: ErrorHintProps) => {
    return render(
        <ThemeProvider theme={theme}>
            <ErrorHint {...props} />
        </ThemeProvider>
    );
};

const testValue = "Error message";

describe("ErrorHint component", () => {
    it("Matches DOM Snapshot", () => {
        const { asFragment } = renderComponent({ error: testValue });

        expect(asFragment()).toMatchSnapshot();
    });

    test("renders nothing when error is undefined", () => {
        renderComponent({});

        const errorText = screen.queryByText(/./);

        expect(errorText).toBeNull();
    });

    test("renders error text when error is provided", () => {
        renderComponent({ error: testValue });

        const errorText = screen.getByText(testValue);

        expect(errorText).toBeInTheDocument();
        expect(errorText).toHaveStyle(`color: ${theme.palette.error.main}`);
    });

    test("renders error text with 'caption' typography", () => {
        renderComponent({ error: testValue });

        const errorText = screen.getByText(testValue);

        expect(errorText).toBeInTheDocument();
        expect(errorText.tagName.toLowerCase()).toBe("span");
    });
});
