"use client";
import { useTheme } from "@mui/material";
import { Typography } from "@mui/material";

export interface DateTypographyProps {
    date: string;
}

export const DateTypography = ({ date }: DateTypographyProps) => {
    const { palette } = useTheme();

    return (
        <Typography variant='h6' align='right' color={palette.grey[100]}>
            {date}
        </Typography>
    );
};
