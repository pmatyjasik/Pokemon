import { Label } from "@/components/Label/Label";
import { ErrorHint } from "@/components/ErrorHint/ErrorHint";
import { ControllerWrapper } from "@/components/TrainerForm/ControllerWrapper/ControllerWrapper";
import { ComboBox, ComboBoxProps } from "@/components/ComboBox/ComboBox";

export interface ComboBoxControllerProps {
    label: string;
    placeholder?: string;
    error?: string;
    comboBoxProps: Omit<ComboBoxProps, "placeholder">;
}

export const ComboBoxController = ({ label, placeholder, error, comboBoxProps }: ComboBoxControllerProps) => (
    <ControllerWrapper>
        <Label label={label} />
        <ComboBox placeholder={placeholder || label} {...comboBoxProps} />
        <ErrorHint error={error} />
    </ControllerWrapper>
);
