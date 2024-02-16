import IconButton from "@mui/material/IconButton/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import useStyles from "./autonomousStyles";
import { useState } from "react";
import Checkbox from "@mui/joy/Checkbox/Checkbox";
import NavigationButtons from "../../components/navigationButtons/navigationButtons";

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

  const [speakerCountSuccess, setSpeakerCountSuccess] = useState<number>(0);
  const [ampCountSuccess, setAmpCountSuccess] = useState<number>(0);
  const [speakerCountFail, setSpeakerCountFail] = useState<number>(0);
  const [ampCountFail, setAmpCountFail] = useState<number>(0);

  return (
    <div className={classes.autonomousPage}>
      <h1 className={classes.mainTitle}>{AUTONOMOUS_TITLE}</h1>
      <h2 className={classes.subTitle}>{LEAVE_TITLE}</h2>
      <Checkbox label={LEAVE_TITLE.toUpperCase()} />
      <h2 className={classes.subTitle}>{SPEAKER_TITLE}</h2>
      <div className={classes.countButtons}>
        <div className={classes.successButton}>
          <h3>{SUCCESS_TITLE}</h3>
          <div>
            <IconButton
              onClick={() =>
                speakerCountSuccess > 0 &&
                setSpeakerCountSuccess((prev) => prev - 1)
              }
            >
              <RemoveIcon />
            </IconButton>
            <>{speakerCountSuccess.toString()}</>
            <IconButton
              onClick={() => setSpeakerCountSuccess((prev) => prev + 1)}
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
                speakerCountFail && setSpeakerCountFail((prev) => prev - 1)
              }
            >
              <RemoveIcon />
            </IconButton>
            <>{speakerCountFail.toString()}</>
            <IconButton onClick={() => setSpeakerCountFail((prev) => prev + 1)}>
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
                ampCountSuccess > 0 && setAmpCountSuccess((prev) => prev - 1)
              }
            >
              <RemoveIcon />
            </IconButton>
            <>{ampCountSuccess.toString()}</>
            <IconButton onClick={() => setAmpCountSuccess((prev) => prev + 1)}>
              <AddIcon />
            </IconButton>
          </div>
        </div>
        <div className={classes.failButton}>
          <h3>{FAIL_TITLE}</h3>
          <div>
            <IconButton
              onClick={() =>
                ampCountFail > 0 && setAmpCountFail((prev) => prev - 1)
              }
            >
              <RemoveIcon />
            </IconButton>
            <>{ampCountFail.toString()}</>
            <IconButton onClick={() => setAmpCountFail((prev) => prev + 1)}>
              <AddIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <div className={classes.ringsCollected}>
      <h2 className={classes.subTitle}>{RINGS_TITLE}</h2>
      <img src="./field.png" className={classes.fieldImage} />
      <Checkbox className={classes.ring1} />
      <Checkbox className={classes.ring2} />
      <Checkbox className={classes.ring3} />
      <Checkbox className={classes.ring4} />
      <Checkbox className={classes.ring5} />
      <Checkbox className={classes.ring6} />
      <Checkbox className={classes.ring7} />
      <Checkbox className={classes.ring8} />
      </div>
      <div>
        <NavigationButtons prevPath={PREV_PATH} nextPath={NEXT_PATH} />
      </div>
    </div>
  );
};

export default Autonomous;
