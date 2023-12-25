import { CSSVariablesResolver, createTheme } from "@mantine/core";

export const theme = createTheme({
    /* Put your mantine theme override here */
    spacing: {
        xxs: "0.5rem",
    },
});

export const resolver: CSSVariablesResolver = (theme) => ({
    variables: {
        "--mantine-spacing-xxs": theme.spacing.xxs,
    },
    light: {},
    dark: {},
});
