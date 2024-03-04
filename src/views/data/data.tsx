import { useEffect, useState } from "react";
import DataGraph from "../../components/dataGraph/dataGraph";
import DataTable from "../../components/dataTable/dataTable";
import NavBar from "../../components/navBar/navBar";
import SelectGraph from "../../components/selectGraph/selectGraph";
import useStyles from "./dataStyles";
import executeQuery from "../../graphql/graphqlClient";
import { getAllMatchData } from "../../graphql/matchDataQueries";
import { ListMatchData, ListUsersByTeam } from "../../graphql/interfaces";
import { useAppSelector } from "../../redux/hooks";
import { TabList, Tab, Tabs } from "@mui/joy";
import { getUsersByTeam } from "../../graphql/userQueries";
import QrReader from "../../components/qrReader/qrReader";
import { TextField } from "@mui/material";
const DATA_TITLE = "Data"; 

const OPTIONS = ["my", "team", "all"];

const TABLE_TITLE = "Table";
const GRAPH_TITLE = "Graph";

const SEARCH_TEAM = "Search team";

const Data: React.FC = () => {
  const { classes } = useStyles();

  const [data, setData] = useState<MatchData[]>([]);
  const [filteredData, setFilteredData] = useState<MatchData[]>([]);

  const [graphKey, setGraphKey] = useState<string>("");
  const [teamSearch, setTeamSearch] = useState<string>("");

  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    executeQuery<ListMatchData>(getAllMatchData).then((response) => {
      if (response) {
        setData(response.listMatchData.items);
        setFilteredData(
          response.listMatchData.items.map(matchData => ({
            ...matchData,
            fouls: {
              fouls: matchData.fouls.fouls !== null ? matchData.fouls.fouls : 0,
              techFouls: matchData.fouls.techFouls !== null ? matchData.fouls.techFouls : 0
            }
          })).filter(matchData => matchData.user === user.id)
        );
      }
    });
  }, []);

  const changedAllowedData = (value: number | string | null) => {
    switch (value) {
      case "my":
        setFilteredData(() =>
          data.filter((matchData) => matchData.user == user.id)
        );
        break;
      case "team":
        user.team
          ? executeQuery<ListUsersByTeam>(getUsersByTeam, {
              team: user.team,
            }).then(
              (response) =>
                response &&
                setFilteredData(() =>
                  data.filter((matchData) =>
                    response.usersByTeam.items.find(
                      (user) => user.id === matchData.user
                    )
                  )
                )
            )
          : setFilteredData(() =>
              data.filter((matchData) => matchData.user == user.id)
            );
        break;
      case "all":
        setFilteredData(data);
        break;
      default:
        setFilteredData(() =>
          data.filter((matchData) => matchData.user == user.id)
        );
        break;
    }
  };

  return (
    <>
      <NavBar />
      <div className={classes.dataPage}>
        <h1 className={classes.mainTitle}>{DATA_TITLE}</h1>
        <QrReader />
        <h2 className={classes.subTitle}>{TABLE_TITLE}</h2>
        <Tabs
          onChange={(_event, value) => changedAllowedData(value)}
          defaultValue="my"
        >
          <TabList>
            {OPTIONS.map((option) => (
              <Tab key={option} value={option}>
                {`${option} data`.toUpperCase()}
              </Tab>
            ))}
          </TabList>
        </Tabs>
        <DataTable data={filteredData} />
        <h2 className={classes.subTitle}>{GRAPH_TITLE}</h2>
        <div className={classes.graph}>
          <SelectGraph setKey={setGraphKey} />
          <div>
            <h2 className={classes.subTitle}>{SEARCH_TEAM}</h2>
            <TextField
              value={teamSearch.length === 4 ? teamSearch : undefined}
              onChange={(e) => setTeamSearch(e.target.value)}
            />
          </div>
          <DataGraph data={filteredData} graphKey={graphKey} teamSearch={teamSearch} />
        </div>
      </div>
    </>
  );
};

export default Data;
