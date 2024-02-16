import useStyles from "./endgameStyles";
import Radio from "@mui/joy/Radio/Radio";
import NavigationButtons from "../../components/navigationButtons/navigationButtons";
import RadioGroup from "@mui/joy/RadioGroup/RadioGroup";
import Checkbox from "@mui/joy/Checkbox/Checkbox";
import { FormControl } from "@mui/material";

const PREV_PATH = "teleop";
const NEXT_PATH = "comments";

const ENDGAME_TITLE = "Endgame";
const STAGE_TITLE = "Stage";
const EXTRA_TITLE = "Extra";

const STAGE_OPTIONS = ["PARK", "ONSTAGE", "HARMONY"];
const EXTRA_OPTIONS = ["SPOTLIT", "TRAP"];

const Endgame: React.FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.endgamePage}>
      <h1 className={classes.mainTitle}>{ENDGAME_TITLE}</h1>
      <h2 className={classes.subTitle}>{STAGE_TITLE}</h2>
      <FormControl>
        <RadioGroup defaultValue="medium" name="radio-buttons-group">
          {STAGE_OPTIONS.map((option) => (
            <Radio value={option} label={option} />
          ))}
        </RadioGroup>
      </FormControl>
      <h2 className={classes.subTitle}>{EXTRA_TITLE}</h2>
      <div>
        {EXTRA_OPTIONS.map((option) => (
          <Checkbox
            className={classes.extra}
            disableIcon
            variant="solid"
            label={option}
          />
        ))}
      </div>
      <NavigationButtons prevPath={PREV_PATH} nextPath={NEXT_PATH} />
    </div>
  );
};

export default Endgame;
