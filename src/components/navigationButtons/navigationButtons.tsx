import Button from "@mui/material/Button/Button";
import { NavLink } from "react-router-dom";
import useStyles from "./navigationButtonsStyles";
import { useDispatch } from "react-redux";
import { resetMatchData } from "../../redux/matchDataSlice";

const BACK = "Back";
const NEXT = "Next";
const SUBMIT = "Submit";

const SELECT_PATH = "select";

const NavigationButtons: React.FC<NavigationButtonsProps> = (props) => {
  const { classes } = useStyles();
  const { prevPath, nextPath } = props;

  const isSubmit = nextPath === SELECT_PATH;

  const dispatch = useDispatch();

  const submitMatch = () => {
    dispatch(resetMatchData());
  };

  return (
    <div>
      <NavLink to={"/" + prevPath}>
        <Button variant="contained" className={classes.navigationButton}>
          {BACK}
        </Button>
      </NavLink>
      <NavLink to={"/" + nextPath}>
        <Button
          variant="contained"
          className={classes.navigationButton}
          onClick={() => isSubmit && submitMatch()}
        >
          {isSubmit ? SUBMIT : NEXT}
        </Button>
      </NavLink>
    </div>
  );
};

export default NavigationButtons;
