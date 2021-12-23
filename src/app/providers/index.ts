import compose from "compose-function";

import { withRouter } from "./with-router";
import { withTheme } from "./with-theme";
import { withHelmet } from "./with-helmet";

export const withProviders = compose(withRouter, withTheme, withHelmet);
