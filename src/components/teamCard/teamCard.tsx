import GroupAddIcon from "@mui/icons-material/GroupAdd";
import GroupRemoveIcon from "@mui/icons-material/GroupRemove";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React from "react";
import useStyles from "./teamCardStyles.js";
import { useAppSelector } from "../../redux/hooks.js";
import executeQuery from "../../graphql/graphqlClient.js";
import { updateUserTeam } from "../../graphql/userQueries.js";
import { setUserTeam } from "../../redux/userSlice.js";
import { useDispatch } from "react-redux";

const TeamCard: React.FC<TeamCardProps> = (props) => {
  const { classes } = useStyles();
  const { id, name, number, description, image } = props.team;

  const currentUser = useAppSelector((state) => state.user);
  const dispatch = useDispatch();

  const changeTeam = async (team: string  | null) => {
    await executeQuery(updateUserTeam, { id: currentUser.id, team: team });
    dispatch(setUserTeam(team));
  };

  return (
    <Card className={classes.teamCard}>
      <CardHeader title={name} subheader={number} />
      <CardMedia component="img" image={image} alt={`${name} image`} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={async () => await changeTeam(id || null)}>
          <GroupAddIcon />
        </IconButton>
        {currentUser.team === id && (
          <IconButton onClick={async () => await changeTeam(null)}>
            <GroupRemoveIcon />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
};

export default TeamCard;
