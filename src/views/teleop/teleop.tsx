import IconButton from "@mui/material/IconButton/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import useStyles from "./teleopStyles";
import NavigationButtons from "../../components/navigationButtons/navigationButtons";
import { useAppSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import {
  addShootingPosition,
  removeShootingPosition,
  setFouls,
  setTechFouls,
  setTeleopAmpFail,
  setTeleopAmpSuccess,
  setTeleopSpeakerFail,
  setTeleopSpeakerSuccess,
} from "../../redux/matchDataSlice";
import NavBar from "../../components/navBar/navBar";
import { Checkbox, Typography } from "@mui/joy";

const TELEOP_TITLE = "Teleop";
const SPEAKER_TITLE = "Speaker";
const AMP_TITLE = "Amp";
const SHOOTING_POSITIONS_TITLE = "Shooting Positions";
const FOUL_TITLE = "Fouls";
const TECH_FOUL_TITLE = "Tech Fouls";

const POSITIONS_HELPING_TEXT = "Choose the options closest to these areas:";
const SHOOTING_POSITIONS = ["none", "wing", "Safe zones", "center line"];

const SUCCESS_TITLE = "Success";
const FAIL_TITLE = "Fail";

const PREV_PATH = "autonomous";
const NEXT_PATH = "endgame";

const Teleop: React.FC = () => {
  const { classes } = useStyles();

  const speakerSuccess = useAppSelector(
    (state) => state.matchData.teleop.speaker.success
  );
  const speakerFail = useAppSelector(
    (state) => state.matchData.teleop.speaker.fail
  );
  const ampSuccess = useAppSelector(
    (state) => state.matchData.teleop.amp.success
  );
  const ampFail = useAppSelector((state) => state.matchData.teleop.amp.fail);

  const shootingPosition = useAppSelector(
    (state) => state.matchData.teleop.shootingPositions
  );

  const foulsCommited = useAppSelector(
    (state) => state.matchData.fouls.fouls
  );

  const techFoulCommited = useAppSelector(
    (state) => state.matchData.fouls.techFouls
  );

  const dispatch = useDispatch();

  const handleShootingPositions = (
    event: React.ChangeEvent<HTMLInputElement>,
    position: string
  ) => {
    if (position === "none") {
      shootingPosition.forEach((position) =>
        dispatch(removeShootingPosition(position))
      );
      dispatch(addShootingPosition(position));
    } else {
      dispatch(removeShootingPosition("none"));
      event.target.checked
        ? dispatch(addShootingPosition(position))
        : dispatch(removeShootingPosition(position));
    }
  };

  return (
    <>
      <NavBar />
      <div className={classes.teleopPage}>
        <h1 className={classes.mainTitle}>{TELEOP_TITLE}</h1>
        <h2 className={classes.subTitle}>{SHOOTING_POSITIONS_TITLE}</h2>
        <div className={classes.shootingPositions}>
          <Typography fontSize="20px">{POSITIONS_HELPING_TEXT}</Typography>
          {SHOOTING_POSITIONS.map((position) => (
            <Checkbox
              label={position.toUpperCase()}
              checked={
                shootingPosition.find(
                  (shootingPosition) => shootingPosition == position
                ) !== undefined
              }
              onChange={(event) => handleShootingPositions(event, position)}
            />
          ))}
        </div>
        <h2 className={classes.subTitle}>{SPEAKER_TITLE}</h2>
        <div className={classes.countButtons}>
          <div className={classes.successButton}>
            <h3>{SUCCESS_TITLE}</h3>
            <div>
              <IconButton
                onClick={() =>
                  speakerSuccess > 0 &&
                  dispatch(setTeleopSpeakerSuccess(speakerSuccess - 1))
                }
              >
                <RemoveIcon />
              </IconButton>
              <>{speakerSuccess.toString()}</>
              <IconButton
                onClick={() =>
                  dispatch(setTeleopSpeakerSuccess(speakerSuccess + 1))
                }
              >
                <AddIcon />
              </IconButton>
            </div>
          </div>
          <div className={classes.failButton}>
            <h3>{FAIL_TITLE}</h3>
            <div>
              <IconButton
                onClick={() =>
                  speakerFail && dispatch(setTeleopSpeakerFail(speakerFail - 1))
                }
              >
                <RemoveIcon />
              </IconButton>
              <>{speakerFail.toString()}</>
              <IconButton
                onClick={() => dispatch(setTeleopSpeakerFail(speakerFail + 1))}
              >
                <AddIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <h2 className={classes.subTitle}>{AMP_TITLE}</h2>
        <div className={classes.countButtons}>
          <div className={classes.successButton}>
            <h3>{SUCCESS_TITLE}</h3>
            <div>
              <IconButton
                onClick={() =>
                  ampSuccess > 0 &&
                  dispatch(setTeleopAmpSuccess(ampSuccess - 1))
                }
              >
                <RemoveIcon />
              </IconButton>
              <>{ampSuccess.toString()}</>
              <IconButton
                onClick={() => dispatch(setTeleopAmpSuccess(ampSuccess + 1))}
              >
                <AddIcon />
              </IconButton>
            </div>
          </div>
          <div className={classes.failButton}>
            <h3>{FAIL_TITLE}</h3>
            <div>
              <IconButton
                onClick={() =>
                  ampFail > 0 && dispatch(setTeleopAmpFail(ampFail - 1))
                }
              >
                <RemoveIcon />
              </IconButton>
              <>{ampFail.toString()}</>
              <IconButton
                onClick={() => dispatch(setTeleopAmpFail(ampFail + 1))}
              >
                <AddIcon />
              </IconButton>
            </div>
          </div>
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

export default Teleop;
