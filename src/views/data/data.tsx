import NavBar from "../../components/navBar/navBar";
import useStyles from "./dataStyles";

const DATA_TITLE = 'Data';

const TABLE_TITLE = 'Table';
const GRAPH_TITLE = 'Graph';

const Data: React.FC = () => {
    const { classes } = useStyles();

    return (
        <>
            <NavBar />
            <div className={classes.dataPage}>
                <h1 className={classes.mainTitle}>{DATA_TITLE}</h1>
                <h2 className={classes.subTitle}>{TABLE_TITLE}</h2>
                <h2 className={classes.subTitle}>{GRAPH_TITLE}</h2>
            </div>
        </>
    );
};

export default Data;