import IconButton from "@mui/material/IconButton/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import useStyles from "./teleopStyles";
import NavigationButtons from "../../components/navigationButtons/navigationButtons";
import { useAppSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { setTeleopAmpFail, setTeleopAmpSuccess, setTeleopSpeakerFail, setTeleopSpeakerSuccess } from "../../redux/matchDataSlice";

const TELEOP_TITLE = "Teleop";
const SPEAKER_TITLE = "Speaker";
const AMP_TITLE = "Amp";

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
  const ampFail = useAppSelector(
    (state) => state.matchData.teleop.amp.fail
  );

  const dispatch = useDispatch();

  return (
    <div className={classes.teleopPage}>
      <h1 className={classes.mainTitle}>{TELEOP_TITLE}</h1>
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
                speakerFail &&
                dispatch(setTeleopSpeakerFail(speakerFail - 1))
              }
            >
              <RemoveIcon />
            </IconButton>
            <>{speakerFail.toString()}</>
            <IconButton
              onClick={() =>
                dispatch(setTeleopSpeakerFail(speakerFail + 1))
              }
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
      <NavigationButtons prevPath={PREV_PATH} nextPath={NEXT_PATH} />
    </div>
  );
};

export default Teleop;
