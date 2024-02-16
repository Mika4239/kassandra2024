import useStyles from "./commentsStyles";
import NavigationButtons from "../../components/navigationButtons/navigationButtons";
import { Textarea } from "@mui/joy";

const PREV_PATH = 'endgame';
const NEXT_PATH = 'select';

const COMMENTS_TITLE = 'Comments';
const DEFENCE_TITLE = 'Defence';
const PENALTIES_TITLE = 'Penalties';
const OTHER_TITLE = 'Other';

const Comments: React.FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.commentsPage}>
      <h1 className={classes.mainTitle}>{COMMENTS_TITLE}</h1>
      <h2 className={classes.subTitle}>{DEFENCE_TITLE}</h2>
      <Textarea size='lg' minRows={5} style={{width: '30%'}}/>
      <h2 className={classes.subTitle}>{PENALTIES_TITLE}</h2>
      <Textarea size='lg' minRows={5} style={{width: '30%'}}/>
      <h2 className={classes.subTitle}>{OTHER_TITLE}</h2>
      <Textarea size='lg' minRows={5} style={{width: '30%'}}/>
      <NavigationButtons prevPath={PREV_PATH} nextPath={NEXT_PATH} />
    </div>
  );
};

export default Comments;
