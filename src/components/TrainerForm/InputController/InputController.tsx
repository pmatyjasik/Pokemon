import { Box } from "@mui/material";
import { Input, InputProps } from "@/components/Input/Input";
import { Label } from "@/components/Label/Label";
import { ErrorHint } from "@/components/ErrorHint/ErrorHint";

export interface InputControllerProps {
    label: string;
    placeholder?: string;
    error?: string;
    inputProps?: Omit<InputProps, "placeholder" | "type">;
}

export const InputController = ({ label, placeholder, error, inputProps }: InputControllerProps) => {
    return (
        <Box display='flex' flexDirection='column' gap={0.5}>
            <Label label={label} />
            <Input placeholder={placeholder || label} type='input' {...inputProps} />
            <ErrorHint error={error} />
        </Box>
    );
};
