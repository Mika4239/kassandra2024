import { useEffect, useMemo, useState } from "react";
import DataGraph from "../../components/dataGraph/dataGraph";
import DataTable from "../../components/dataTable/dataTable";
import NavBar from "../../components/navBar/navBar";
import SelectGraph from "../../components/selectGraph/selectGraph";
import useStyles from "./dataStyles";
import executeQuery from "../../graphql/graphqlClient";
import { getAllMatchData } from "../../graphql/matchDataQueries";
import { ListMatchData } from "../../graphql/interfaces";
import { useAppSelector } from "../../redux/hooks";

const DATA_TITLE = "Data";

const TABLE_TITLE = "Table";
const GRAPH_TITLE = "Graph";

const Data: React.FC = () => {
  const { classes } = useStyles();

  const [data, setData] = useState<MatchData[]>([]);
  const [graphKey, setGraphKey] = useState<string>("");

  const [allowedUsers, setAllowesUsers] = useState<string[]>();

  const userId = useAppSelector((state) => state.user.id);

  useEffect(() => {
    setAllowesUsers([userId]);
    executeQuery<ListMatchData>(getAllMatchData).then(
      (response) => response && setData(response.listMatchData.items)
    );
  }, []);

  useMemo(() => {
    setData((prev) =>
      prev.filter((matchData) =>
        allowedUsers?.find((user) => user === matchData.user)
      )
    );
  }, [allowedUsers]);

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
          <DataGraph data={data} graphKey={graphKey} />
        </div>
      </div>
    </>
  );
};

export default Data;
