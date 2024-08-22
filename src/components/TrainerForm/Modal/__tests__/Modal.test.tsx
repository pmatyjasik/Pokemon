import React from "react";
import { render, screen } from "@testing-library/react";
import { Modal } from "@/components/TrainerForm/Modal/Modal";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme";

const renderComponent = (props = {}) => {
    return render(
        <ThemeProvider theme={theme}>
            <Modal isOpen={true} onClose={() => {}} {...props} />
        </ThemeProvider>
    );
};

describe("Modal", () => {
    it("Matches DOM Snapshot", () => {
        const { asFragment } = renderComponent();

        expect(asFragment()).toMatchSnapshot();
    });

    test("renders Success message and Reset form button", () => {
        renderComponent();

        expect(screen.getByText("Success")).toBeInTheDocument();
        expect(screen.getByText("Reset form")).toBeInTheDocument();
    });

    test("does not render when isOpen is false", () => {
        renderComponent({ isOpen: false });

        expect(screen.queryByText("Success")).not.toBeInTheDocument();
        expect(screen.queryByText("Reset form")).not.toBeInTheDocument();
    });
});
