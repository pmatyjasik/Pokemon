import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme";
import { ComboBox } from "@/components/ComboBox/ComboBox";

const options = ["Option 1", "Option 2", "Option 3"];

const renderComponent = (props = {}) => {
    return render(
        <ThemeProvider theme={theme}>
            <ComboBox options={options} placeholder='Select an option' {...props} />
        </ThemeProvider>
    );
};

describe("ComboBox", () => {
    it("Matches DOM Snapshot", () => {
        const { asFragment } = renderComponent();

        expect(asFragment()).toMatchSnapshot();
    });

    it("should renders with placeholder text", () => {
        renderComponent();

        expect(screen.getByPlaceholderText("Select an option")).toBeInTheDocument();
    });

    it("should displays loading indicator when loading prop is true", () => {
        renderComponent({ loading: true });

        expect(screen.getByTestId("loader")).toBeInTheDocument();
    });

    it("should not display clear button", () => {
        renderComponent();

        fireEvent.click(screen.getByRole("combobox"));
        fireEvent.change(screen.getByRole("combobox"), { target: { value: "Option 1" } });

        expect(screen.queryByLabelText("Clear")).not.toBeInTheDocument();
    });
});
