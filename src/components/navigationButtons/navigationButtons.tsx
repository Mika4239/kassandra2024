import Button from "@mui/material/Button/Button";
import { NavLink } from "react-router-dom";
import useStyles from "./navigationButtonsStyles";
import { useDispatch } from "react-redux";
import { resetMatchData, setMatch } from "../../redux/matchDataSlice";
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

  const matchData = useAppSelector((state) => state.matchData);
  const dispatch = useDispatch();

  const getMatchNumber = (match: string) => {
    const numbers = match.match(/\d+$/);
    return numbers ? numbers[0] : match;
  };

  const submitMatch = async () => {
    const matchNumber = String(getMatchNumber(matchData.match));
    dispatch(setMatch(matchNumber));
    executeQuery(createMatchData, { input: matchData })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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
          onClick={async () => isSubmit && (await submitMatch())}
        >
          {isSubmit ? SUBMIT : NEXT}
        </Button>
      </NavLink>
    </div>
  );
};

export default NavigationButtons;
