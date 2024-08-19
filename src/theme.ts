"use client";
import { createTheme } from "@mui/material/styles";
import { ThemeOptions } from "@mui/material/styles";
import { NextFont } from "next/dist/compiled/@next/font";
import localFont from "next/font/local";

const IbmVga: NextFont = localFont({
    src: "./fonts/IBM_VGA.woff",
    display: "swap",
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
            100: "#rgba(42, 42, 42, 1)",
            200: "#rgba(127, 127, 127, 1)",
            300: "#rgba(228, 228, 228, 1)",
            400: "#rgba(238, 238, 238, 1)",
        },
        error: {
            main: "rgba(255, 78, 78, 1)",
        },
        action: {
            disabled: "#rgba(0, 0, 0, 0.2)",
        },
    },
    typography: {
        fontFamily: IbmVga.style.fontFamily,
    },
};

export const theme = createTheme(themeOptions);
