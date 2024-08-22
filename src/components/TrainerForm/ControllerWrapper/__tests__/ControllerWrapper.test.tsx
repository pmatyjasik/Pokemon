import { cleanup, render, screen } from "@testing-library/react";
import { ReactNode } from "react";
import { ControllerWrapper } from "@/components/TrainerForm/ControllerWrapper/ControllerWrapper";

const renderComponent = (children: ReactNode) => {
    return render(<ControllerWrapper>{children}</ControllerWrapper>);
};

const testValue = "Test Content";

describe("ControllerWrapper Component", () => {
    afterEach(() => {
        cleanup();
    });

    it("Matches DOM Snapshot", () => {
        const { asFragment } = renderComponent(<div>{testValue}</div>);

        expect(asFragment()).toMatchSnapshot();
    });

    it("renders children correctly", () => {
        renderComponent(<div data-testid='child'>{testValue}</div>);

        expect(screen.getByTestId("child")).toBeInTheDocument();
        expect(screen.getByText(testValue)).toBeInTheDocument();
    });
});
