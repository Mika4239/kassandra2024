import { TextField } from "@mui/material";
import useStyles from "./commentsStyles";
import NavigationButtons from "../../components/navigationButtons/navigationButtons";

const PREV_PATH = 'endgame';
const NEXT_PATH = 'select';

const COMMENTS_TITLE = 'Comments';
const DEFENCE_TITLE = 'Defence';

const Comments: React.FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.commentsPage}>
      <h1 className={classes.mainTitle}>{COMMENTS_TITLE}</h1>
      <h2 className={classes.subTitle}>{DEFENCE_TITLE}</h2>
      <TextField />
      <NavigationButtons prevPath={PREV_PATH} nextPath={NEXT_PATH} />
    </div>
  );
};

export default Comments;
