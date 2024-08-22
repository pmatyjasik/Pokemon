import React from "react";
import { render, screen } from "@testing-library/react";
import { ActionButtons } from "@/components/TrainerForm/ActionButtons/ActionButtons";

const renderComponent = () => {
    return render(<ActionButtons onReset={() => {}} />);
};

describe("ActionButtons", () => {
    it("Matches DOM Snapshot", () => {
        const { asFragment } = renderComponent();

        expect(asFragment()).toMatchSnapshot();
    });

    test("renders Reset and Submit buttons", () => {
        renderComponent();

        expect(screen.getByText("Reset")).toBeInTheDocument();
        expect(screen.getByText("Submit")).toBeInTheDocument();
    });

    test("submit button has type submit", () => {
        renderComponent();

        expect(screen.getByText("Submit")).toHaveAttribute("type", "submit");
    });
});
