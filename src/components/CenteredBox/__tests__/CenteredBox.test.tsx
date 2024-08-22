import { cleanup, render, screen } from "@testing-library/react";
import { ReactNode } from "react";
import { CenteredBox } from "@/components/CenteredBox/CenteredBox";

const renderComponent = (children: ReactNode) => {
    return render(<CenteredBox>{children}</CenteredBox>);
};

const testValue = "Test Content";

describe("CenteredBox Component", () => {
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

    it("centers the content vertically and horizontally", () => {
        renderComponent(<div>{testValue}</div>);

        const outerBox = screen.getByText(testValue).parentElement?.parentElement;

        expect(outerBox).toHaveStyle("display: flex");
        expect(outerBox).toHaveStyle("justify-content: center");
        expect(outerBox).toHaveStyle("align-items: center");
        expect(outerBox).toHaveStyle("min-height: 100vh");
    });
});
