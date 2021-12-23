import { Grid, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const ForgotPassword = () => {

    return (
        <Grid container justifyContent="flex-end">
            <Grid item>
                <Link variant="body2" component={RouterLink} to="/sign-up">
                    {"Don't have an account? Sign Up"}
                </Link>
            </Grid>
        </Grid>
    );
};
