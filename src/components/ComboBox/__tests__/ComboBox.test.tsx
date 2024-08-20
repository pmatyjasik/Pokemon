import { render, screen, waitFor } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import userEvent from "@testing-library/user-event";
import { ComboBox, ComboBoxProps } from "@/components/ComboBox/ComboBox";
import { theme } from "@/theme";

const renderComponent = (props: ComboBoxProps) => {
    return render(
        <ThemeProvider theme={theme}>
            <ComboBox {...props} />
        </ThemeProvider>
    );
};

const options = ["Option 1", "Option 2", "Option 3"];
const placeholder = "Choose";
const onChangeMock = jest.fn();

const defaultProps = {
    options,
    value: "",
    onChange: onChangeMock,
    loading: false,
    placeholder,
} satisfies ComboBoxProps;

describe("ComboBox component", () => {
    it("Matches DOM Snapshot", () => {
        const { asFragment } = renderComponent(defaultProps);

        expect(asFragment()).toMatchSnapshot();
    });

    it("renders the ComboBox component", () => {
        renderComponent(defaultProps);

        const inputElement = screen.getByPlaceholderText(placeholder);
        expect(inputElement).toBeInTheDocument();
    });

    it("displays options when clicked", async () => {
        renderComponent(defaultProps);

        const inputElement = screen.getByPlaceholderText(placeholder);
        userEvent.click(inputElement);

        await waitFor(() => {
            options.forEach((option) => {
                expect(screen.getByText(option)).toBeInTheDocument();
            });
        });
    });

    it("displays CircularProgress when loading is true", () => {
        renderComponent({ ...defaultProps, loading: true });

        const progressIndicator = screen.getByTestId("loader");
        expect(progressIndicator).toBeInTheDocument();
    });

    it("renders with the correct selected value", () => {
        renderComponent({
            ...defaultProps,
            value: "Option 1",
        });

        const inputElement = screen.getByDisplayValue("Option 1");
        expect(inputElement).toBeInTheDocument();
    });

    it("handles empty options gracefully", () => {
        renderComponent(defaultProps);

        const inputElement = screen.getByPlaceholderText(placeholder);
        userEvent.click(inputElement);

        expect(screen.queryAllByRole("option")).toHaveLength(0);
    });

    it("does not call onChange when a null value is passed", () => {
        renderComponent(defaultProps);

        const inputElement = screen.getByPlaceholderText(placeholder);
        userEvent.clear(inputElement);

        expect(onChangeMock).not.toHaveBeenCalled();
    });
});
