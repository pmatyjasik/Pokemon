"use client";

import { Autocomplete, CircularProgress, Popper, styled, useTheme } from "@mui/material";
import { Input } from "@/components/Input/Input";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { SyntheticEvent, useCallback, useMemo } from "react";

const StyledPopper = styled(Popper)(({ theme }) => ({
    "& .MuiAutocomplete-paper": {
        border: theme.palette.grey[400],
        boxShadow: theme.shadows[0],
    },
    "& .MuiAutocomplete-noOptions": {
        fontSize: 14,
    },
}));

const StyledListbox = styled("ul")(({ theme }) => ({
    fontSize: 14,
    height: theme.spacing(50),
    "& .MuiAutocomplete-option": {
        cursor: "pointer",
        "&:hover": {
            backgroundColor: `${theme.palette.primary.light} !important`,
        },
        "&[aria-selected='true']": {
            backgroundColor: `${theme.palette.background.default} !important`,
            color: theme.palette.primary.main,
        },
    },
}));

export interface ComboBoxProps {
    options: string[];
    value: string;
    onChange: (selected: string) => void;
    loading: boolean;
    placeholder: string;
}

export const ComboBox = ({ options, value, onChange, loading, placeholder }: ComboBoxProps) => {
    const { palette, spacing } = useTheme();

    const handleChange = useCallback(
        (_: SyntheticEvent<Element, Event>, newValue: string | null) => {
            if (newValue !== null) {
                onChange(newValue);
            }
        },
        [onChange]
    );

    const popupIcon = useMemo(() => {
        const color = { color: palette.grey[100] };
        return loading ? (
            <CircularProgress data-testid='loader' size={spacing(4)} sx={color} />
        ) : (
            <ExpandMoreIcon sx={color} />
        );
    }, [loading, palette.grey, spacing]);

    return (
        <Autocomplete
            options={options}
            disableClearable
            PopperComponent={StyledPopper}
            ListboxComponent={StyledListbox}
            renderInput={(props) => <Input {...props} placeholder={placeholder} />}
            popupIcon={popupIcon}
            onChange={handleChange}
            value={value}
        />
    );
};
