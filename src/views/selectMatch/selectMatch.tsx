import { useEffect, useMemo, useState } from "react";
import SelectFromData from "../../components/selectFromData/selectFromData";
import useStyles from "./selectMatchStyles";
import { getTBAData } from "../../utils/general";
import { translateMatch, translateTeam } from "../../utils/translations";
import Button from "@mui/material/Button/Button";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import NavBar from "../../components/navBar/navBar";

const SELECT_TITLE = "Select Match";

const EVENT = "event";
const MATCH = "match";
const TEAM = "team";

const START_BUTTON = "Start";
const AUTONOMOUS_PATH = "autonomous";

const SelectMatch: React.FC = () => {
  const { classes } = useStyles();

  const [events, setEvents] = useState<Event[]>([]);
  const [matches, setMatches] = useState<string[]>([]);
  const [teams, setTeams] = useState<string[]>([]);

  const event = useAppSelector((state) => state.matchData.event);
  const match = useAppSelector((state) => state.matchData.match);

  useEffect(() => {
    getTBAData<Event[]>("https://www.thebluealliance.com/api/v3/events/2024")
      .catch((error) => console.log(error))
      .then((response) => response && setEvents(response));
  }, []);

  useMemo(() => {
    event !== '' && getTBAData<Match[]>(
      `https://www.thebluealliance.com/api/v3/event/${event}/matches/simple`
    )
      .catch((error) => console.log(error))
      .then(
        (response) =>
          response &&
          setMatches(
            response
              .sort((a, b) => a.predicted_time - b.predicted_time)
              .map((event) => event.key)
          )
      );
  }, [event]);

  useMemo(() => {
    match !== "" &&
      getTBAData<Match>(
        `https://www.thebluealliance.com/api/v3/match/${match}/simple`
      )
        .catch((error) => console.log(error))
        .then(
          (response) =>
            response &&
            setTeams(
              response.alliances.blue.team_keys.concat(
                response.alliances.red.team_keys
              )
            )
        );
  }, [match, event]);

  const translateEvent = (key: string) => {
    return events.find((event) => event.key == key)?.name || "";
  };

  return (
    <>
      <NavBar />
      <div className={classes.selectPage}>
        <h1 className={classes.mainTitle}>{SELECT_TITLE}</h1>
        <SelectFromData
          name={EVENT}
          data={events.map((event) => event.key)}
          dataTranslate={translateEvent}
        />
        <SelectFromData
          name={MATCH}
          data={matches}
          dataTranslate={translateMatch}
        />
        <SelectFromData
          name={TEAM}
          data={teams}
          dataTranslate={translateTeam}
        />
        <NavLink to={"/" + AUTONOMOUS_PATH}>
          <Button variant="contained" className={classes.startButton}>
            {START_BUTTON}
          </Button>
        </NavLink>
      </div>
    </>
  );
};

export default SelectMatch;
