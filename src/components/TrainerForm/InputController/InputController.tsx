import { Input, InputProps } from "@/components/Input/Input";
import { Label } from "@/components/Label/Label";
import { ErrorHint } from "@/components/ErrorHint/ErrorHint";
import { ControllerWrapper } from "@/components/TrainerForm/ControllerWrapper/ControllerWrapper";

export interface InputControllerProps {
    label: string;
    placeholder?: string;
    error?: string;
    inputProps?: Omit<InputProps, "placeholder">;
}

export const InputController = ({ label, placeholder, error, inputProps }: InputControllerProps) => (
    <ControllerWrapper>
        <Label label={label} />
        <Input placeholder={placeholder || label} {...inputProps} />
        <ErrorHint error={error} />
    </ControllerWrapper>
);
