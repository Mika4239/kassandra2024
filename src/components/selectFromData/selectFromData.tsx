import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import useStyles from "./selectFromDataStyles";
import { useAppSelector } from "../../redux/hooks";
import { SelectMatchState } from "../../types/interfaces";
import { useDispatch } from "react-redux";
import { setMatchTeam } from "../../redux/matchDataSlice";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

const SelectFromData: React.FC<SelectFromDataProps> = (props) => {
  const { classes } = useStyles();
  const { name, data, dataTranslate } = props;

  const chosen = useAppSelector(
    (state) => state.matchData[name as keyof SelectMatchState]
  );
  const dispatch = useDispatch();

  const [isOther, setIsOther] = useState<boolean>(false);

  useEffect(() => {
    setIsOther(chosen !== '' && data.find((item) => item === chosen) === undefined);
  }, [data]);

  return (
    <FormControl className={classes.selectBox}>
      <InputLabel id={name + "-label"}>{name}</InputLabel>
      <Select
        required
        labelId={name + "-label"}
        value={isOther ? "other" : chosen}
        label={name}
        onChange={(e: SelectChangeEvent<string>) => {
          setIsOther(e.target.value === "other");
          e.target.value !== "other" && dispatch(
            setMatchTeam({ name: name, input: e.target.value })
          );
        }}
      >
        {data.map((item, index) => (
          <MenuItem key={index} value={item}>
            {dataTranslate(item, index)}
          </MenuItem>
        ))}
        <MenuItem key="other" value="other">
          other
        </MenuItem>
      </Select>
      {isOther && (
        <TextField
          label="Other"
          value={chosen}
          onChange={(e) => 
            dispatch(setMatchTeam({ name: name, input: e.target.value }))
          }
          margin="normal"
          required
        />
      )}
    </FormControl>
  );
};

export default SelectFromData;
