import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React, { useEffect, useState } from "react";
import executeQuery from "../../graphql/graphqlClient.js";
import { ListTeams } from "../../graphql/interfaces.js";
import { getAllTeams } from "../../graphql/teamQueries.js";

const TEAM = "Team";
const LABEL = "team-label";

const SelectTeam: React.FC<SelectTeamProps> = (props) => {
  const { team, setTeam } = props;

  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    executeQuery<ListTeams>(getAllTeams).then(response => response && setTeams(response.listTeams.items));
  }, []);

  return (
    <FormControl>
      <InputLabel id={LABEL}>{TEAM}</InputLabel>
      <Select
        labelId={LABEL}
        value={team}
        label={LABEL}
        onChange={(e) => setTeam(e.target.value)}
      >
        {teams.map((team) => (
          <MenuItem key={team.id} value={team.id}>
            {team.name + " - " + team.number}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectTeam;
