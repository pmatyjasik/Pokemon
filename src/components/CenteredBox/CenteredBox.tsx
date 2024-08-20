"use client";

import { Box, useTheme } from "@mui/material";
import { ReactNode } from "react";

interface CenteredBoxProps {
    children: ReactNode;
}

export const CenteredBox = ({ children }: CenteredBoxProps) => {
    const { palette, shape, spacing } = useTheme();

    return (
        <Box display='flex' justifyContent='center' alignItems='center' minHeight='100vh'>
            <Box
                component='div'
                border={1}
                borderColor={palette.grey[300]}
                borderRadius={shape.borderRadius}
                maxWidth={spacing(136)}
                width={spacing(135)}
                padding={spacing(8)}
            >
                {children}
            </Box>
        </Box>
    );
};
