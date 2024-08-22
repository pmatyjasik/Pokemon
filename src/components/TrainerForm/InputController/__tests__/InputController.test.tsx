import { cleanup, render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme";
import { InputController, InputControllerProps } from "@/components/TrainerForm/InputController/InputController";

const renderComponent = (props: InputControllerProps) => {
    return render(
        <ThemeProvider theme={theme}>
            <InputController {...props} />
        </ThemeProvider>
    );
};

const label = "Test label";
const placeholder = "Test placeholder";

const defaultProps: InputControllerProps = {
    label,
    placeholder,
};

describe("InputForm Component", () => {
    afterEach(() => {
        cleanup();
    });

    it("Matches DOM Snapshot", () => {
        const { asFragment } = renderComponent(defaultProps);

        expect(asFragment()).toMatchSnapshot();
    });

    it("renders the Label component with the correct label", () => {
        renderComponent(defaultProps);

        const labelElement = screen.getByTestId("label");

        expect(labelElement).toHaveTextContent(label);
    });

    it("renders the Input component with the correct placeholder", () => {
        renderComponent({ ...defaultProps });

        const inputElement = screen.getByPlaceholderText(placeholder);

        expect(inputElement).toBeInTheDocument();
    });

    it("renders the Input component with the label as placeholder when placeholder is not provided", () => {
        renderComponent({ ...defaultProps, placeholder: undefined });

        const inputElement = screen.getByPlaceholderText(label);

        expect(inputElement).toBeInTheDocument();
    });
});
