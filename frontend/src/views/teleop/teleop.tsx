import IconButton from "@mui/material/IconButton/IconButton";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import useStyles from "./teleopStyles";
import { useState } from "react";
import NavigationButtons from "../../components/navigationButtons/navigationButtons";

const TELEOP_TITLE = 'Teleop';
const SPEAKER_TITLE = 'Speaker';
const AMP_TITLE = 'Amp';

const SUCCESS_TITLE = 'Success';
const FAIL_TITLE = 'Fail';

const PREV_PATH = 'autonomous';
const NEXT_PATH = 'endgame';

const Teleop: React.FC = () => {
    const { classes } = useStyles();

    const [speakerCountSuccess, setSpeakerCountSuccess] = useState<number>(0);
    const [ampCountSuccess, setAmpCountSuccess] = useState<number>(0);
    const [speakerCountFail, setSpeakerCountFail] = useState<number>(0);
    const [ampCountFail, setAmpCountFail] = useState<number>(0);
    
    return (
        <div className={classes.teleopPage}>
            <h1 className={classes.mainTitle}>{TELEOP_TITLE}</h1>
            <h2 className={classes.subTitle}>{SPEAKER_TITLE}</h2>
            <div className={classes.countButtons}>
                <div className={classes.successButton}>
                    <h3>{SUCCESS_TITLE}</h3>
                    <div>
                        <IconButton onClick={() => speakerCountSuccess > 0 && setSpeakerCountSuccess(prev => prev - 1)}><RemoveIcon/></IconButton>
                        <>{speakerCountSuccess.toString()}</>
                        <IconButton onClick={() => setSpeakerCountSuccess(prev => prev + 1)}><AddIcon/></IconButton>
                    </div>
                </div>
                <div className={classes.failButton}>
                    <h3>{FAIL_TITLE}</h3>
                    <div>
                        <IconButton onClick={() => speakerCountFail && setSpeakerCountFail(prev => prev - 1)}><RemoveIcon/></IconButton>
                        <>{speakerCountFail.toString()}</>
                        <IconButton onClick={() => setSpeakerCountFail(prev => prev + 1)}><AddIcon/></IconButton>
                    </div>
                </div>
            </div>
            <h2 className={classes.subTitle}>{AMP_TITLE}</h2>
            <div className={classes.countButtons}>
                <div className={classes.successButton}>
                    <h3>{SUCCESS_TITLE}</h3>
                    <div>
                        <IconButton onClick={() => ampCountSuccess > 0 && setAmpCountSuccess(prev => prev - 1)}><RemoveIcon/></IconButton>
                        <>{ampCountSuccess.toString()}</>
                        <IconButton onClick={() => setAmpCountSuccess(prev => prev + 1)}><AddIcon/></IconButton>
                    </div>
                </div>
                <div className={classes.failButton}>
                    <h3>{FAIL_TITLE}</h3>
                    <div>
                        <IconButton onClick={() => ampCountFail > 0 && setAmpCountFail(prev => prev - 1)}><RemoveIcon/></IconButton>
                        <>{ampCountFail.toString()}</>
                        <IconButton onClick={() => setAmpCountFail(prev => prev + 1)}><AddIcon/></IconButton>
                    </div>
                </div>
            </div>
            <NavigationButtons prevPath={PREV_PATH} nextPath={NEXT_PATH}/>
        </div>
    );
};

export default Teleop;