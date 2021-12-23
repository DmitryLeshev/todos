import { Box } from "@mui/system";
import { CSSProperties } from "react";
import { Container, Page, ScrollBar } from "shared/ui";

type Props = { helmet?: string; style?: CSSProperties; scrollbar?: boolean }
export const DefaultTemplate: React.FC<Props> = ({ helmet, children, style, scrollbar }) => {
    const content = <Box
        component="section"
        sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            alignItems: "flex-start",
            justifyContent: "flex-start",
            ...style
        }}
    >
        <Container>
            {children}
        </Container>
    </Box>

    return withHelmet(helmet, withScrollbar(scrollbar, content))
};

function withHelmet(helmet: string | undefined, content: JSX.Element): JSX.Element {
    if (helmet) {
        return <Page helmet={helmet}>
            {content}
        </Page>
    }
    return content
}

function withScrollbar(scrollbar: boolean | undefined, content: JSX.Element): JSX.Element {
    if (scrollbar) {
        return <ScrollBar fullScreen>
            {content}
        </ScrollBar>
    }
    return content
}
