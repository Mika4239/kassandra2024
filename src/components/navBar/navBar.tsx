import { NavLink, useNavigate } from "react-router-dom";
import useStyles from "./navBarStyles.js";
import { Avatar, IconButton, ListItemIcon, MenuItem } from "@mui/material";
import { useAppSelector } from "../../redux/hooks.js";
import { Dropdown, Menu, MenuButton } from "@mui/joy";
import { Logout } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { resetUser } from "../../redux/userSlice.js";
import { resetAllMatchData } from "../../redux/matchDataSlice.js";

const SCOUTING_PATH = "/select";
const DATA_PATH = "/data";

const SCOUTING = "Scouting";
const DATA = "Data";

const LOG_OUT = 'Log Out';

const NavBar: React.FC = () => {
  const { classes } = useStyles();

  const currentUser = useAppSelector((state) => state.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const logout = () => {
    dispatch(resetAllMatchData());
    dispatch(resetUser());
    navigate('/');
  }

  return (
    <div className={classes.bar}>
      <NavLink to={SCOUTING_PATH} className={classes.navLink}>
        {SCOUTING}
      </NavLink>
      <NavLink to={DATA_PATH} className={classes.navLink}>
        {DATA}
      </NavLink>
      <Dropdown>
        <MenuButton slots={{ root: IconButton }}>
          <Avatar
            src={`https://ui-avatars.com/api/?name=${currentUser.firstName}+${currentUser.lastName}`}
          />
        </MenuButton>
        <Menu>
          <MenuItem onClick={logout}>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            {LOG_OUT}
          </MenuItem>
        </Menu>
      </Dropdown>
    </div>
  );
};

export default NavBar;
