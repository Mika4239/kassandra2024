import useStyles from "./endgameStyles";
import IconButton from "@mui/material/IconButton/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Radio from "@mui/joy/Radio/Radio";
import NavigationButtons from "../../components/navigationButtons/navigationButtons";
import RadioGroup from "@mui/joy/RadioGroup/RadioGroup";
import Checkbox from "@mui/joy/Checkbox/Checkbox";
import { FormControl, breadcrumbsClasses } from "@mui/material";
import { useAppSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { setSpotlit, setStage, setFouls, setTechFouls, setTrapSuccessed, setTrapTried } from "../../redux/matchDataSlice";
import NavBar from "../../components/navBar/navBar";

const PREV_PATH = "teleop";
const NEXT_PATH = "comments";

const ENDGAME_TITLE = "Endgame";
const STAGE_TITLE = "Stage";
const EXTRA_TITLE = "Extra";
const FOUL_TITLE = "Fouls";
const TECH_FOUL_TITLE = "Tech Fouls";

const STAGE_OPTIONS = ["NONE", "PARK", "ONSTAGE", "HARMONY"];
const EXTRA_OPTIONS = ["SPOTLIT", "TRAP TRIED", "TRAP SUCCESS"];

const Endgame: React.FC = () => {
  const { classes } = useStyles();

  const stage = useAppSelector((state) => state.matchData.endgame.stage);
  const spotlit = useAppSelector((state) => state.matchData.endgame.spotlit);
  const trapTried = useAppSelector((state) => state.matchData.endgame.trap.tried)
  const trapSucceed = useAppSelector((state) => state.matchData.endgame.trap.succeeded);
  const foulsCommited = useAppSelector((state) => state.matchData.fouls.fouls);
  const techFoulCommited = useAppSelector((state) => state.matchData.fouls.techFouls);

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
                if (option === "SPOTLIT") {
                  dispatch(setSpotlit(event.target.checked));
                } else if (option === "TRAP TRIED") {
                  dispatch(setTrapTried(event.target.checked));
                } else if (option === "TRAP SUCCESS") {
                  dispatch(setTrapSuccessed(event.target.checked));
                }
              }}
              checked={option === "SPOTLIT" ? spotlit : option === "TRAP TRIED" ? trapTried : option === "TRAP SUCCESS" ? trapSucceed : false}
            />
          ))}
        </div>
        <h2 className={classes.subTitle}>{FOUL_TITLE}</h2>
        <div className={classes.countButtons}>
          <div className={classes.successButton}>
            <h3>{FOUL_TITLE}</h3>
            <div>
              <IconButton
                onClick={() =>
                  foulsCommited > 0 &&
                  dispatch(setFouls(foulsCommited - 1))
                }
              >
                <RemoveIcon />
              </IconButton>
              <>{foulsCommited.toString()}</>
              <IconButton
                onClick={() =>
                  dispatch(setFouls(foulsCommited + 1))
                }
              >
                <AddIcon />
              </IconButton>
            </div>
          </div>
          <div className={classes.failButton}>
            <h3>{TECH_FOUL_TITLE}</h3>
            <div>
              <IconButton
                onClick={() =>
                  techFoulCommited > 0 && dispatch(setTechFouls(techFoulCommited - 1))
                }
              >
                <RemoveIcon />
              </IconButton>
              <>{techFoulCommited.toString()}</>
              <IconButton
                onClick={() => dispatch(setTechFouls(techFoulCommited + 1))}
              >
                <AddIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <NavigationButtons prevPath={PREV_PATH} nextPath={NEXT_PATH} />
      </div>
    </>
  );
};

export default Endgame;
