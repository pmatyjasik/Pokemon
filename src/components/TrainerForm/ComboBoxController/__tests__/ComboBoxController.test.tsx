import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme";
import {
    ComboBoxController,
    ComboBoxControllerProps,
} from "@/components/TrainerForm/ComboBoxController/ComboBoxController";

const renderComponent = (props: ComboBoxControllerProps<string>) => {
    return render(
        <ThemeProvider theme={theme}>
            <ComboBoxController {...props} />
        </ThemeProvider>
    );
};

const label = "Test label";
const placeholder = "Test placeholder";
const error = "Test error";

const defaultProps: ComboBoxControllerProps<string> = {
    label,
    placeholder,
    comboBoxProps: {
        options: ["Option 1", "Option 2"],
        value: "",
        onChange: jest.fn(),
        loading: false,
    },
};

describe("ComboBoxController Component", () => {
    it("Matches DOM Snapshot", () => {
        const { asFragment } = renderComponent(defaultProps);

        expect(asFragment()).toMatchSnapshot();
    });

    it("renders the Label component with the correct label", () => {
        renderComponent(defaultProps);

        const labelElement = screen.getByText(label);

        expect(labelElement).toBeInTheDocument();
    });

    it("renders the ComboBox component with the correct placeholder", () => {
        renderComponent(defaultProps);

        const comboBoxElement = screen.getByPlaceholderText(placeholder);

        expect(comboBoxElement).toBeInTheDocument();
    });

    it("renders the ErrorHint component with the correct error message", () => {
        renderComponent({ ...defaultProps, error });

        const errorElement = screen.getByText(error);

        expect(errorElement).toBeInTheDocument();
    });
});
