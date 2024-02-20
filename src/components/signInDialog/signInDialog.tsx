import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import useStyles from "./signInDialogStyles.js";
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import executeQuery from "../../graphql/graphqlClient.js";
import { getUserByLogin } from "../../graphql/userQueries.js";
import { listUsers } from "../../graphql/interfaces.js";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice.js";
import { setMatchDataUser } from "../../redux/matchDataSlice.js";

const SIGN_IN = "Sign In";

const USERNAME = "Username";
const PASSWORD = "Password";

const CANCEL = "Cancel";

const SELECT_PATH = '/select';

const SignInDialog: React.FC<SignInDialogProps> = (props) => {
  const { classes } = useStyles();
  const { open, setOpen } = props;

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkUser = () => {
    executeQuery<listUsers>(getUserByLogin, {'username': username, 'password': password}).then((response) => {
      if(response && response.listUsers.items.length > 0){
        dispatch(setUser(response.listUsers.items[0]));
        dispatch(setMatchDataUser(response.listUsers.items[0].id));
        setOpen(false);
        navigate(SELECT_PATH);
      }
      else{
        console.log('wrong username or password');
      }
    })
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>{SIGN_IN}</DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <TextField
          className={classes.inputBox}
          label={USERNAME}
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <TextField
          className={classes.inputBox}
          label={PASSWORD}
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            ),
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>{CANCEL}</Button>
        <Button variant="contained" onClick={checkUser}>
          {SIGN_IN}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignInDialog;
