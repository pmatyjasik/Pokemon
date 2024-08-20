import { InputLabel } from "@mui/material";

import styled from "@emotion/styled";

const StylesLabel = styled(InputLabel)(({ theme }) => ({
    fontSize: 12,
    color: theme.palette.grey[100],
    textAlign: "left",
}));

export interface LabelProps {
    label: string;
}

export const Label = ({ label }: LabelProps) => <StylesLabel data-testid='label'>{label}</StylesLabel>;
