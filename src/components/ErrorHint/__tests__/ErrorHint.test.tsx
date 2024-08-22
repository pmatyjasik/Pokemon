import { cleanup, render, screen } from "@testing-library/react";
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

const error = "Error message";

const defaultProps = {
    error,
} satisfies ErrorHintProps;

describe("ErrorHint component", () => {
    afterEach(() => {
        cleanup();
    });

    it("Matches DOM Snapshot", () => {
        const { asFragment } = renderComponent(defaultProps);

        expect(asFragment()).toMatchSnapshot();
    });

    test("renders nothing when error is undefined", () => {
        renderComponent({});

        const errorText = screen.queryByText(/./);

        expect(errorText).toBeNull();
    });

    test("renders error text when error is provided", () => {
        renderComponent(defaultProps);

        const errorText = screen.getByText(error);

        expect(errorText).toBeInTheDocument();
        expect(errorText).toHaveStyle(`color: ${theme.palette.error.main}`);
    });

    test("renders error text with 'caption' typography", () => {
        renderComponent(defaultProps);

        const errorText = screen.getByText(error);

        expect(errorText).toBeInTheDocument();
        expect(errorText.tagName.toLowerCase()).toBe("span");
    });
});
