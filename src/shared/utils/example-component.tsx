import { reflect } from "@effector/reflect";
import { useTranslation } from "react-i18next";

import { Box } from "@mui/system";

type Props = {};

function View(props: Props) {
  const { t } = useTranslation();

  return <Box>Example</Box>;
}

const Example = reflect({
  view: View,
  bind: {},
  hooks: {},
});

export { Example };
