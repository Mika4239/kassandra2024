import useStyles from "./commentsStyles";
import NavigationButtons from "../../components/navigationButtons/navigationButtons";
import { Textarea } from "@mui/joy";
import { useAppSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { setComments } from "../../redux/matchDataSlice";
import NavBar from "../../components/navBar/navBar";
import QrDialog from "../../components/qrDialog/qrDialog";

const PREV_PATH = "endgame";
const NEXT_PATH = "select";

const COMMENTS_TITLE = "Comments";
const DEFENSE_TITLE = "Defense";
const PENALTIES_TITLE = "Penalties";
const OTHER_TITLE = "Other";

const Comments: React.FC = () => {
  const { classes } = useStyles();

  const defense = useAppSelector((state) => state.matchData.comments.defense);
  const penalties = useAppSelector(
    (state) => state.matchData.comments.penalties
  );
  const other = useAppSelector((state) => state.matchData.comments.other);

  const dispatch = useDispatch();

  return (
    <>
      <NavBar />
      <div className={classes.commentsPage}>
        <h1 className={classes.mainTitle}>{COMMENTS_TITLE}</h1>
        <h2 className={classes.subTitle}>{DEFENSE_TITLE}</h2>
        <Textarea
          size="lg"
          minRows={5}
          style={{ width: "30%" }}
          value={defense}
          onChange={(event) =>
            dispatch(
              setComments({ name: "defense", input: event.target.value })
            )
          }
        />
        <h2 className={classes.subTitle}>{PENALTIES_TITLE}</h2>
        <Textarea
          size="lg"
          minRows={5}
          style={{ width: "30%" }}
          value={penalties}
          onChange={(event) =>
            dispatch(
              setComments({ name: "penalties", input: event.target.value })
            )
          }
        />
        <h2 className={classes.subTitle}>{OTHER_TITLE}</h2>
        <Textarea
          size="lg"
          minRows={5}
          style={{ width: "30%" }}
          value={other}
          onChange={(event) =>
            dispatch(setComments({ name: "other", input: event.target.value }))
          }
        />
        <QrDialog />
        <NavigationButtons prevPath={PREV_PATH} nextPath={NEXT_PATH} />
      </div>
    </>
  );
};

export default Comments;
