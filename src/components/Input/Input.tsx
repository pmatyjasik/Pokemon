"use client";

import { TextField, TextFieldProps } from "@mui/material";
import styled from "@emotion/styled";

const StyledTextField = styled(TextField)(({ theme }) => ({
    "& .MuiOutlinedInput-root": {
        fontSize: "14px",
        borderRadius: theme.shape.borderRadius,
        "& fieldset": {
            borderColor: theme.palette.grey[400],
            borderWidth: "1px",
        },
        "&:hover fieldset": {
            borderColor: theme.palette.primary.main,
        },
        "&.Mui-focused fieldset": {
            boxShadow: theme.shadows[1],
            borderWidth: "1px",
        },
    },
    "& .MuiInputBase-input": {
        padding: "14px 10px",
        color: theme.palette.grey[100],
    },
    "& .MuiInputBase-input::placeholder": {
        fontSize: "14px",
        color: theme.palette.grey[200],
        opacity: 1,
    },
}));

export type InputProps = TextFieldProps;

export const Input = (props: InputProps) => <StyledTextField {...props} />;
