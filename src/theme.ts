"use client";

import { createTheme, Shadows } from "@mui/material/styles";
import { ThemeOptions } from "@mui/material/styles";
import { NextFont } from "next/dist/compiled/@next/font";
import localFont from "next/font/local";

const IbmVga: NextFont = localFont({
    src: "./fonts/IBM_VGA.woff",
    display: "swap",
    style: "normal",
    weight: "400",
});

const themeOptions: ThemeOptions = {
    palette: {
        mode: "light",
        background: {
            default: "rgba(255, 255, 255, 1)",
        },
        primary: {
            main: "rgba(151, 71, 255, 1)",
            dark: "rgba(113, 53, 191, 1)",
            light: "rgba(151, 71, 255, 0.25)",
        },
        grey: {
            100: "rgba(42, 42, 42, 1)",
            200: "rgba(127, 127, 127, 1)",
            300: "rgba(228, 228, 228, 1)",
            400: "rgba(238, 238, 238, 1)",
        },
        error: {
            main: "rgba(255, 78, 78, 1)",
        },
        action: {
            disabled: "rgba(0, 0, 0, 0.2)",
        },
    },
    spacing: 4,
    typography: {
        fontFamily: IbmVga.style.fontFamily,
        fontWeightMedium: 400,
        fontSize: 16,
        h6: {
            fontSize: "12px",
        },
        caption: {
            fontSize: "10px",
        },
    },
    shape: {
        borderRadius: 2,
    },
    shadows: [
        "none",
        "0px 0px 0px 4px rgba(151, 71, 255, 0.25)",
        "0px 4px 10px 2px rgba(0, 0, 0, 0.1)",
        ...Array(20).fill("none"),
    ] as Shadows,
};

export const theme = createTheme(themeOptions);
