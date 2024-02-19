import { useEffect, useState } from "react";
import DataGraph from "../../components/dataGraph/dataGraph";
import DataTable from "../../components/dataTable/dataTable";
import NavBar from "../../components/navBar/navBar";
import SelectGraph from "../../components/selectGraph/selectGraph";
import useStyles from "./dataStyles";
import executeQuery from "../../graphql/graphqlClient";
import { getAllMatchData } from "../../graphql/matchDataQueries";
import { listMatchData } from "../../graphql/interfaces";

const DATA_TITLE = 'Data';

const TABLE_TITLE = 'Table';
const GRAPH_TITLE = 'Graph';

const Data: React.FC = () => {
    const { classes } = useStyles();

    const [data, setData] = useState<MatchData[]>([]);
    const [graphKey, setGraphKey] = useState<string>('');

    useEffect(() => {
        executeQuery<listMatchData>(getAllMatchData).then((response) => response && setData(response.listMatchData.items));
    }, []);

    return (
        <>
            <NavBar />
            <div className={classes.dataPage}>
                <h1 className={classes.mainTitle}>{DATA_TITLE}</h1>
                <h2 className={classes.subTitle}>{TABLE_TITLE}</h2>
                <DataTable data={data} />
                <h2 className={classes.subTitle}>{GRAPH_TITLE}</h2>
                <div className={classes.graph}>
                    <SelectGraph setKey={setGraphKey} />
                    <DataGraph data={data} graphKey={graphKey}/>
                </div>
            </div>
        </>
    );
};

export default Data;