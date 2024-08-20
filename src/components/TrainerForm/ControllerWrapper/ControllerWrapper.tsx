import { Box, useTheme } from "@mui/material";
import { ReactNode } from "react";

export interface ControllerWrapperProps {
    children: ReactNode;
}

export const ControllerWrapper = ({ children }: ControllerWrapperProps) => {
    const { spacing } = useTheme();

    return (
        <Box display='flex' flexDirection='column' gap={0.5} height={spacing(22)}>
            {children}
        </Box>
    );
};
