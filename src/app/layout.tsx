import type { Metadata } from "next";
import { ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "@/theme";
import "./globals.css";

export const metadata: Metadata = {
    title: "Pokemon",
    description: "Simple app for pokemon's trainer.",
    icons: {
        icon: [
            {
                type: "image/png",
                url: "/favicon/favicon.png",
            },
        ],
    },
    robots: {
        index: false,
        follow: false,
    },
};

const RootLayout = ({
    children,
}: Readonly<{
    children: ReactNode;
}>) => {
    return (
        <html lang='en'>
            <body>
                <AppRouterCacheProvider>
                    <CssBaseline />
                    <ThemeProvider theme={theme}>
                        <main>{children}</main>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
};

export default RootLayout;
