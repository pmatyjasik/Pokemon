"use client";

import { TextField, TextFieldProps } from "@mui/material";
import styled from "@emotion/styled";

const StyledTextField = styled(TextField)(({ theme }) => ({
    "& .MuiOutlinedInput-root": {
        fontSize: 14,
        borderRadius: theme.shape.borderRadius,
        height: theme.spacing(12),
        "& fieldset": {
            borderColor: theme.palette.grey[400],
            borderWidth: 1,
        },
        "&:hover fieldset": {
            borderColor: theme.palette.primary.main,
        },
        "&.Mui-focused fieldset": {
            boxShadow: theme.shadows[1],
            borderWidth: 1,
        },
    },
    "& .MuiInputBase-input": {
        padding: "14px 10px",
        color: theme.palette.grey[100],
    },
    "& .MuiInputBase-input::placeholder": {
        fontSize: 14,
        color: theme.palette.grey[200],
        opacity: 1,
    },
}));

export type InputProps = TextFieldProps;

export const Input = (props: InputProps) => <StyledTextField {...props} />;
