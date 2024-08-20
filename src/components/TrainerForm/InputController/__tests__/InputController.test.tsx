import { render, screen } from "@testing-library/react";
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

const labelTest = "Test label";
const placeholderTest = "Test placeholder";

const defaultProps: InputControllerProps = {
    label: labelTest,
    placeholder: placeholderTest,
};

describe("InputForm", () => {
    it("Matches DOM Snapshot", () => {
        const { asFragment } = renderComponent({ ...defaultProps });

        expect(asFragment()).toMatchSnapshot();
    });

    it("renders the Label component with the correct label", () => {
        renderComponent({ ...defaultProps });

        const labelElement = screen.getByTestId("label");

        expect(labelElement).toHaveTextContent(labelTest);
    });

    it("renders the Input component with the correct placeholder", () => {
        renderComponent({ ...defaultProps });

        const inputElement = screen.getByPlaceholderText(placeholderTest);

        expect(inputElement).toBeInTheDocument();
    });

    it("renders the Input component with the label as placeholder when placeholder is not provided", () => {
        renderComponent({ label: labelTest });

        const inputElement = screen.getByPlaceholderText(labelTest);

        expect(inputElement).toBeInTheDocument();
    });
});
