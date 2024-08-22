import { Label } from "@/components/Label/Label";
import { ErrorHint } from "@/components/ErrorHint/ErrorHint";
import { ControllerWrapper } from "@/components/TrainerForm/ControllerWrapper/ControllerWrapper";
import { ComboBox, ComboBoxProps } from "@/components/ComboBox/ComboBox";

export interface ComboBoxControllerProps<T> {
    label: string;
    placeholder?: string;
    error?: string;
    comboBoxProps: Omit<ComboBoxProps<T>, "ref" | "placeholder">;
}

export const ComboBoxController = <T,>({ label, placeholder, error, comboBoxProps }: ComboBoxControllerProps<T>) => (
    <ControllerWrapper>
        <Label label={label} />
        <ComboBox<T> {...comboBoxProps} placeholder={placeholder || label} />
        <ErrorHint error={error} />
    </ControllerWrapper>
);
