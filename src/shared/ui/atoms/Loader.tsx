import { CircularProgress, CircularProgressProps } from '@mui/material';

type Props = CircularProgressProps & {};
export const Circular: React.FC<Props> = (props) => {
    return <CircularProgress {...props} />
}
