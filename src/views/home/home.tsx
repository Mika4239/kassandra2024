import Button from "@mui/material/Button/Button";
import useStyles from "./homeStyles";
import SignUpDialog from "../../components/signUpDialog/signUpDialog";
import { useState } from "react";
import SignInDialog from "../../components/signInDialog/signInDialog";

const HOME_TITLE = "Kassandra 2024";

const SIGN_IN_BUTTON = "Sign In";
const SIGN_UP_BUTTON = "Sign Up";

const Home = () => {
  const { classes } = useStyles();

  const [openSignIn, setOpenSignIn] = useState<boolean>(false);
  const [openSignUp, setOpenSignUp] = useState<boolean>(false);

  return (
    <div className={classes.homePage}>
      <h1 className={classes.homeTitle}>{HOME_TITLE}</h1>
      <div>
        <Button
          className={classes.signIn}
          variant="contained"
          onClick={() => setOpenSignIn(true)}
        >
          {SIGN_IN_BUTTON}
        </Button>
        <SignInDialog open={openSignIn} setOpen={setOpenSignIn} />
        <Button className={classes.signUp} onClick={() => setOpenSignUp(true)}>
          {SIGN_UP_BUTTON}
        </Button>
        <SignUpDialog open={openSignUp} setOpen={setOpenSignUp} />
      </div>
    </div>
  );
};

export default Home;
