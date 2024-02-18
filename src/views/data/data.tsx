import DataGraph from "../../components/dataGraph/dataGraph";
import DataTable from "../../components/dataTable/dataTable";
import NavBar from "../../components/navBar/navBar";
import SelectGraph from "../../components/selectGraph/selectGraph";
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
                <DataTable data={[]} />
                <h2 className={classes.subTitle}>{GRAPH_TITLE}</h2>
                <div className={classes.graph}>
                    <SelectGraph />
                    <DataGraph data={[]} key={''}/>
                </div>
            </div>
        </>
    );
};

export default Data;