import { Grid, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const AlreadyAccount = () => {
    return (
        <Grid container justifyContent="flex-end">
            <Grid item>
                <Link variant="body2" component={RouterLink} to="/sign-in">
                    Already have an account? Sign in
                </Link>
            </Grid>
        </Grid>
    );
};
