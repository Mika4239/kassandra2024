import Button from "@mui/material/Button/Button";
import useStyles from "./homeStyles";

const HOME_TITLE = 'Kassandra 2024';

const SIGN_IN_BUTTON = 'Sign In';
const SIGN_UP_BUTTON = 'Sign Up';

const Home = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.homePage}>
            <h1 className={classes.homeTitle}>{HOME_TITLE}</h1>
            <div>
                <Button className={classes.signIn} variant="contained">{SIGN_IN_BUTTON}</Button>
                <Button className={classes.signUp}>{SIGN_UP_BUTTON}</Button>
            </div>
        </div>
    );
};

export default Home;