"use client";

import { createTheme, Shadows, Theme } from "@mui/material/styles";
import { ThemeOptions } from "@mui/material/styles";
import { NextFont } from "next/dist/compiled/@next/font";
import localFont from "next/font/local";

const IbmVga: NextFont = localFont({
    src: "./fonts/IBM_VGA.woff",
    display: "swap",
    style: "normal",
    weight: "400",
});

// Define color variables
const colors = {
    black: "rgba(0, 0, 0, 1)",
    white: "rgba(255, 255, 255, 1)",
    primaryMain: "rgba(151, 71, 255, 1)",
    primaryDark: "rgba(113, 53, 191, 1)",
    primaryLight: "rgba(151, 71, 255, 0.25)",
    grey100: "rgba(42, 42, 42, 1)",
    grey200: "rgba(127, 127, 127, 1)",
    grey300: "rgba(228, 228, 228, 1)",
    grey400: "rgba(238, 238, 238, 1)",
    errorMain: "rgba(255, 78, 78, 1)",
    actionDisabled: "rgba(0, 0, 0, 0.2)",
};

const shadows = {
    none: "none",
    primary: "0px 0px 0px 4px " + colors.primaryLight,
    secondary: "0px 4px 10px 2px rgba(0, 0, 0, 0.1)",
};

const themeOptions: ThemeOptions = {
    palette: {
        mode: "light",
        background: {
            default: colors.white,
        },
        primary: {
            main: colors.primaryMain,
            dark: colors.primaryDark,
            light: colors.primaryLight,
        },
        grey: {
            100: colors.grey100,
            200: colors.grey200,
            300: colors.grey300,
            400: colors.grey400,
        },
        error: {
            main: colors.errorMain,
        },
        action: {
            disabled: colors.actionDisabled,
        },
    },
    spacing: 4,
    typography: {
        fontFamily: IbmVga.style.fontFamily,
        fontWeightMedium: 400,
        fontSize: 16,
        subtitle1: {
            fontSize: "12px",
            color: colors.grey100,
        },
        subtitle2: {
            fontSize: "14px",
            color: colors.grey100,
        },
        caption: {
            fontSize: "10px",
        },
    },
    shape: {
        borderRadius: 2,
    },
    shadows: [shadows.none, shadows.primary, shadows.secondary, ...Array(24).fill(shadows.none)] as Shadows,
    components: {
        MuiButton: {
            styleOverrides: {
                containedPrimary: {
                    backgroundColor: colors.primaryMain,
                    color: colors.white,
                    boxShadow: shadows.none,
                    fontSize: "14px",
                    "&:hover": {
                        backgroundColor: colors.primaryDark,
                    },
                    "&:focus": {
                        backgroundColor: colors.primaryDark,
                        boxShadow: shadows.primary,
                    },
                },
                containedInfo: {
                    backgroundColor: colors.grey400,
                    color: colors.grey100,
                    boxShadow: shadows.none,
                    fontSize: "14px",
                    "&:hover": {
                        backgroundColor: colors.grey300,
                    },
                    "&:focus": {
                        backgroundColor: colors.grey300,
                        boxShadow: shadows.primary,
                    },
                },
            },
        },
        MuiChip: {
            variants: [
                {
                    props: { variant: "pokemonType" },
                    style: {
                        color: colors.black,
                        backgroundColor: colors.primaryLight,
                        fontSize: "12px",
                        paddingTop: "1px",
                    },
                },
            ],
        },
    },
};

export const theme = createTheme(themeOptions);
