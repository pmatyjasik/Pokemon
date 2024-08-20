import { render, screen } from "@testing-library/react";
import { DateTypography, DateTypographyProps } from "@/components/DateTypography/DateTypography";

const renderComponent = (props: DateTypographyProps) => {
    return render(<DateTypography {...props} />);
};

const testValue = "2024-08-20";

describe("Date Component", () => {
    it("Matches DOM Snapshot", () => {
        const { asFragment } = renderComponent({ date: testValue });

        expect(asFragment()).toMatchSnapshot();
    });

    it("renders the date prop correctly", () => {
        renderComponent({ date: testValue });

        expect(screen.getByText(testValue)).toBeInTheDocument();
    });
});
