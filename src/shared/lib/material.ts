declare module '@mui/material/styles' {
    interface Theme {
        header: {
            height: number,
        },
        footer: {
            height: number,
        },
        status: {
            danger: string;
        };
    }
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}

export { }