import useStyles from "./homeStyles";

const HOME_TITLE = 'Kassandra 2024'

const Home = () => {
    const { classes } = useStyles();
    return (
        <div className={classes.homePage}>
            <h1 className={classes.homeTitle}>{HOME_TITLE}</h1>
        </div>
    );
};

export default Home;