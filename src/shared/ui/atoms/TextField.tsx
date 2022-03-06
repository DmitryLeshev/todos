import { TextField as TextFieldMaterial, TextFieldProps } from "@mui/material";

type Props = TextFieldProps & {};
export const TextField: React.FC<Props> = (props) => {
  return <TextFieldMaterial {...props} />;
};
