import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useStyles from "./selectFromDataStyles";
import { useAppSelector } from "../../redux/hooks";
import { SelectMatchState } from "../../types/interfaces";
import { useDispatch } from "react-redux";
import { setMatchTeam } from "../../redux/matchDataSlice";
import { TextField } from "@mui/material";
import { useState } from "react";

const SelectFromData: React.FC<SelectFromDataProps> = (props) => {
  const { classes } = useStyles();
  const { name, data, dataTranslate } = props;

  const chosen = useAppSelector(
    (state) => state.matchData[name as keyof SelectMatchState]
  );
  const dispatch = useDispatch();

  const [isOther, setIsOther] = useState<boolean>(data.find((item) => item === chosen) === undefined);

  return (
    <FormControl className={classes.selectBox}>
      <InputLabel id={name + "-label"}>{name}</InputLabel>
      <Select
        required
        labelId={name + "-label"}
        value={isOther ? "other" : chosen}
        label={name}
        onChange={(e) => {
          setIsOther(e.target.value === 'other');
          dispatch(setMatchTeam({ name: name, input: e.target.value }));
        }}
      >
        {data.map((item, index) => (
          <MenuItem key={index} value={item}>
            {dataTranslate(item, index)}
          </MenuItem>
        ))}
        <MenuItem key="other" value="other">other</MenuItem>
      </Select>
      {isOther &&
        <TextField
          label="Other Option"
          name="otherOption"
          value={chosen}
          onChange={(e) => dispatch(setMatchTeam({ name: name, input: e.target.value }))}
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
      }
    </FormControl>
  );
};

export default SelectFromData;
