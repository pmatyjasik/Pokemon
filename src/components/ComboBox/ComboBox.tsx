"use client";

import { Autocomplete, AutocompleteProps, CircularProgress, Popper, styled, useTheme } from "@mui/material";
import { Input } from "@/components/Input/Input";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { forwardRef, useMemo, Ref } from "react";

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

export interface ComboBoxProps<T> extends Omit<AutocompleteProps<T, false, true, false>, "renderInput"> {
    placeholder: string;
}

export const ComboBox = forwardRef(<T,>(props: ComboBoxProps<T>, ref: Ref<HTMLDivElement>) => {
    const { placeholder, ...autocompleteProps } = props;
    const { palette, spacing } = useTheme();

    const popupIcon = useMemo(() => {
        const color = { color: palette.grey[100] };

        return props.loading ? (
            <CircularProgress data-testid='loader' size={spacing(4)} sx={color} />
        ) : (
            <ExpandMoreIcon sx={color} />
        );
    }, [props.loading, palette.grey, spacing]);

    return (
        <Autocomplete
            {...autocompleteProps}
            ref={ref}
            disableClearable
            PopperComponent={StyledPopper}
            ListboxComponent={StyledListbox}
            popupIcon={popupIcon}
            renderInput={(params) => <Input {...params} placeholder={placeholder} />}
        />
    );
}) as (<T>(props: ComboBoxProps<T> & { ref?: Ref<HTMLDivElement> }) => JSX.Element) & {
    displayName?: string;
};

ComboBox.displayName = "ComboBox";
