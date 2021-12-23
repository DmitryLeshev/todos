import { CSSProperties } from 'react';
import SimpleBar from 'simplebar-react';

const DEFAULT_SCROLLBAR_STYLE: CSSProperties = {
    position: 'absolute', width: '100%', height: '100%'
}

type Props = { style?: CSSProperties; fullScreen?: boolean }
export const ScrollBar: React.FC<Props> = ({ children, style, fullScreen }) => {
    return <SimpleBar
        style={{ ...DEFAULT_SCROLLBAR_STYLE, ...style }}
        forceVisible="y"
        autoHide={true}
        scrollableNodeProps={{
            className: fullScreen && "simplebar-content-wrapper_full-screen",
        }}
    >
        {children}
    </SimpleBar>
}
