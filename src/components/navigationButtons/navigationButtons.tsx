import Button from "@mui/material/Button/Button";
import { NavLink } from "react-router-dom";
import useStyles from "./navigationButtonsStyles";
import { useDispatch } from "react-redux";
import { resetMatchData } from "../../redux/matchDataSlice";
import executeQuery from "../../graphql/graphqlClient";
import { useAppSelector } from "../../redux/hooks";
import { createMatchData } from "../../graphql/matchDataQueries";

const BACK = "Back";
const NEXT = "Next";
const SUBMIT = "Submit";

const SELECT_PATH = "select";

const NavigationButtons: React.FC<NavigationButtonsProps> = (props) => {
  const { classes } = useStyles();
  const { prevPath, nextPath } = props;

  const isSubmit = nextPath === SELECT_PATH;

  const { _persist, ...matchData} = useAppSelector((state) => state.matchData);
  const dispatch = useDispatch();

  const submitMatch = async () => {
    await executeQuery(createMatchData, {'input': matchData});
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
          onClick={async () => isSubmit && await submitMatch()}
        >
          {isSubmit ? SUBMIT : NEXT}
        </Button>
      </NavLink>
    </div>
  );
};

export default NavigationButtons;
