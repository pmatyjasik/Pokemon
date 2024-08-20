import { Typography, useTheme } from "@mui/material";

export interface ErrorHintProps {
    error?: string;
}

export const ErrorHint = ({ error }: ErrorHintProps) => {
    const { palette } = useTheme();

    return error ? (
        <Typography variant='caption' align='left' color={palette.error.main}>
            {error}
        </Typography>
    ) : null;
};
