import IconButton from "@mui/material/IconButton/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import useStyles from "./autonomousStyles";
import Checkbox from "@mui/joy/Checkbox/Checkbox";
import NavigationButtons from "../../components/navigationButtons/navigationButtons";
import { useAppSelector } from "../../redux/hooks";
import {
  setAutonomousAmpFail,
  setAutonomousAmpSuccess,
  setAutonomousSpeakerFail,
  setAutonomousSpeakerSuccess,
  addRingCollected,
  removeRingcollected,
  setLeave,
} from "../../redux/matchDataSlice";
import { useDispatch } from "react-redux";

const AUTONOMOUS_TITLE = "Autonomous";
const LEAVE_TITLE = "Leave";
const SPEAKER_TITLE = "Speaker";
const AMP_TITLE = "Amp";

const SUCCESS_TITLE = "Success";
const FAIL_TITLE = "Fail";
const RINGS_TITLE = "Rings Collected";

const PREV_PATH = "select";
const NEXT_PATH = "teleop";

const Autonomous: React.FC = () => {
  const { classes } = useStyles();

  const leave = useAppSelector((state) => state.matchData.autonomous.leave);
  const speakerSuccess = useAppSelector(
    (state) => state.matchData.autonomous.speaker.success
  );
  const speakerFail = useAppSelector(
    (state) => state.matchData.autonomous.speaker.fail
  );
  const ampSuccess = useAppSelector(
    (state) => state.matchData.autonomous.amp.success
  );
  const ampFail = useAppSelector(
    (state) => state.matchData.autonomous.amp.fail
  );
  const ringsCollected = useAppSelector(
    (state) => state.matchData.autonomous.ringsCollected
  );

  const dispatch = useDispatch();

  return (
    <div className={classes.autonomousPage}>
      <h1 className={classes.mainTitle}>{AUTONOMOUS_TITLE}</h1>
      <h2 className={classes.subTitle}>{LEAVE_TITLE}</h2>
      <Checkbox
        label={LEAVE_TITLE.toUpperCase()}
        onChange={(event) => dispatch(setLeave(event.target.checked))}
        checked={leave}
      />
      <h2 className={classes.subTitle}>{SPEAKER_TITLE}</h2>
      <div className={classes.countButtons}>
        <div className={classes.successButton}>
          <h3>{SUCCESS_TITLE}</h3>
          <div>
            <IconButton
              onClick={() =>
                speakerSuccess > 0 &&
                dispatch(setAutonomousSpeakerSuccess(speakerSuccess - 1))
              }
            >
              <RemoveIcon />
            </IconButton>
            <>{speakerSuccess.toString()}</>
            <IconButton
              onClick={() =>
                dispatch(setAutonomousSpeakerSuccess(speakerSuccess + 1))
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
                dispatch(setAutonomousSpeakerFail(speakerFail - 1))
              }
            >
              <RemoveIcon />
            </IconButton>
            <>{speakerFail.toString()}</>
            <IconButton
              onClick={() =>
                dispatch(setAutonomousSpeakerFail(speakerFail + 1))
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
                dispatch(setAutonomousAmpSuccess(ampSuccess - 1))
              }
            >
              <RemoveIcon />
            </IconButton>
            <>{ampSuccess.toString()}</>
            <IconButton
              onClick={() => dispatch(setAutonomousAmpSuccess(ampSuccess + 1))}
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
                ampFail > 0 && dispatch(setAutonomousAmpFail(ampFail - 1))
              }
            >
              <RemoveIcon />
            </IconButton>
            <>{ampFail.toString()}</>
            <IconButton
              onClick={() => dispatch(setAutonomousAmpFail(ampFail + 1))}
            >
              <AddIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <div className={classes.ringsCollected}>
        <h2 className={classes.subTitle}>{RINGS_TITLE}</h2>
        <img src="./field.png" className={classes.fieldImage} />
        <Checkbox
          className={classes.ring1}
          onChange={(event) => {
            console.log(
              ringsCollected,
              ringsCollected.find((ring) => ring === 1)
            );
            event.target.checked
              ? dispatch(addRingCollected(1))
              : dispatch(removeRingcollected(1));
          }}
          checked={ringsCollected.find((ring) => ring === 1) != undefined}
        />
        <Checkbox
          className={classes.ring2}
          onChange={(event) =>
            event.target.checked
              ? dispatch(addRingCollected(2))
              : dispatch(removeRingcollected(2))
          }
          checked={ringsCollected.find((ring) => ring === 2) != undefined}
        />
        <Checkbox
          className={classes.ring3}
          onChange={(event) =>
            event.target.checked
              ? dispatch(addRingCollected(3))
              : dispatch(removeRingcollected(3))
          }
          checked={ringsCollected.find((ring) => ring === 3) != undefined}
        />
        <Checkbox
          className={classes.ring4}
          onChange={(event) =>
            event.target.checked
              ? dispatch(addRingCollected(4))
              : dispatch(removeRingcollected(4))
          }
          checked={ringsCollected.find((ring) => ring === 4) != undefined}
        />
        <Checkbox
          className={classes.ring5}
          onChange={(event) =>
            event.target.checked
              ? dispatch(addRingCollected(5))
              : dispatch(removeRingcollected(5))
          }
          checked={ringsCollected.find((ring) => ring === 5) != undefined}
        />
        <Checkbox
          className={classes.ring6}
          onChange={(event) =>
            event.target.checked
              ? dispatch(addRingCollected(6))
              : dispatch(removeRingcollected(6))
          }
          checked={ringsCollected.find((ring) => ring === 6) != undefined}
        />
        <Checkbox
          className={classes.ring7}
          onChange={(event) =>
            event.target.checked
              ? dispatch(addRingCollected(7))
              : dispatch(removeRingcollected(7))
          }
          checked={ringsCollected.find((ring) => ring === 7) != undefined}
        />
        <Checkbox
          className={classes.ring8}
          onChange={(event) =>
            event.target.checked
              ? dispatch(addRingCollected(8))
              : dispatch(removeRingcollected(8))
          }
          checked={ringsCollected.find((ring) => ring === 8) != undefined}
        />
      </div>
      <NavigationButtons prevPath={PREV_PATH} nextPath={NEXT_PATH} />
    </div>
  );
};

export default Autonomous;
