import useStyles from "./endgameStyles";
import Radio from "@mui/joy/Radio/Radio";
import NavigationButtons from "../../components/navigationButtons/navigationButtons";
import RadioGroup from "@mui/joy/RadioGroup/RadioGroup";
import Checkbox from "@mui/joy/Checkbox/Checkbox";
import { FormControl, breadcrumbsClasses } from "@mui/material";
import { useAppSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { setSpotlit, setStage, setTrapSucceed, setTrapTried } from "../../redux/matchDataSlice";
import NavBar from "../../components/navBar/navBar";

const PREV_PATH = "teleop";
const NEXT_PATH = "comments";

const ENDGAME_TITLE = "Endgame";
const STAGE_TITLE = "Stage";
const EXTRA_TITLE = "Extra";  

const STAGE_OPTIONS = ["NONE", "PARK", "FAILED CLIMBING", "CLIMBED"];
const EXTRA_OPTIONS = ["SPOTLIT", "TRAP TRIED", "TRAP SCORED"];

const Endgame: React.FC = () => {
  const { classes } = useStyles();

  const stage = useAppSelector((state) => state.matchData.endgame.stage);
  const spotlit = useAppSelector((state) => state.matchData.endgame.spotlit);
  const trap = useAppSelector((state) => state.matchData.endgame.trap);

  const dispatch = useDispatch();

  return (
    <>
      <NavBar />
      <div className={classes.endgamePage}>
        <h1 className={classes.mainTitle}>{ENDGAME_TITLE}</h1>
        <h2 className={classes.subTitle}>{STAGE_TITLE}</h2>
        <FormControl>
          <RadioGroup defaultValue="medium" name="radio-buttons-group">
            {STAGE_OPTIONS.map((option, index) => (
              <Radio
                value={option}
                label={option}
                key={index}
                onChange={(event) => {
                  dispatch(setStage(event.target.value));
                }}
                checked={stage === option}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <h2 className={classes.subTitle}>{EXTRA_TITLE}</h2>
        <div>
          {EXTRA_OPTIONS.map((option, index) => (
            <Checkbox
              key={index}
              className={classes.extra}
              disableIcon
              variant="solid"
              label={option}
              onChange={(event) => {
                switch (option) {
                  case "SPOTLIT":
                    dispatch(setSpotlit(event.target.checked));
                    break;
                  case "TRAP TRIED":
                    dispatch(setTrapTried(event.target.checked));
                    break;
                  case "TRAP SCORED":
                    dispatch(setTrapSucceed(event.target.checked));
                    break;
                  default:
                    break;
                }
              }}
              checked={
                option === "SPOTLIT" ? spotlit :
                option === "TRAP TRIED" ? trap.tried :
                option === "TRAP SCORED" ? trap.succeeded :
                false
              }
            />
          ))}
        </div>
        <NavigationButtons prevPath={PREV_PATH} nextPath={NEXT_PATH} />
      </div>
    </>
  );
};

export default Endgame;
