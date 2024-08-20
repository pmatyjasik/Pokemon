import { render, screen } from "@testing-library/react";
import { DateTypography, DateTypographyProps } from "@/components/DateTypography/DateTypography";

const renderComponent = (props: DateTypographyProps) => {
    return render(<DateTypography {...props} />);
};

const date = "2024-08-20";

const defaultProps = {
    date,
} satisfies DateTypographyProps;

describe("Date Component", () => {
    it("Matches DOM Snapshot", () => {
        const { asFragment } = renderComponent(defaultProps);

        expect(asFragment()).toMatchSnapshot();
    });

    it("renders the date prop correctly", () => {
        renderComponent(defaultProps);

        expect(screen.getByText(date)).toBeInTheDocument();
    });
});
