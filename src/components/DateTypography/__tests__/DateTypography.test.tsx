import { render, screen } from "@testing-library/react";
import {
    DateTypography,
    DateTypographyProps,
} from "@/components/DateTypography/DateTypography";

describe("Date Component", () => {
    const renderComponent = (props: DateTypographyProps) => {
        return render(<DateTypography {...props} />);
    };

    const testValue = "2024-08-20";

    it("Matches DOM Snapshot", () => {
        const { asFragment } = render(<DateTypography date={testValue} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("renders the date prop correctly", () => {
        renderComponent({ date: testValue });

        expect(screen.getByText(testValue)).toBeInTheDocument();
    });
});
