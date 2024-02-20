import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Button, Typography } from "@mui/material";
import useStyles from "./selectGraphStyles";

const AUTONOMOUS_TITLE = "Autonomous";
const TELEOP_TITLE = "Teleop";
const ENDGAME_TITLE = "Endgame";

const AUTONOMOUS_OPTIONS = ["leave", "speaker", "amp", "ringsCollected"];
const TELEOP_OPTIONS = ["speaker", "amp", "shootingPositions"];
const ENDGAME_OPTIONS = ["stage", "spotlit", "trap"];

const PeriodItem: React.FC<PeriodItemProps> = (props) => {
  const { period, options, setKey } = props;
  const { classes } = useStyles();

  const [open, setOpen] = useState<boolean>(false);

  return (
    <ListItem className={classes.selectList}>
      <Button onClick={() => setOpen(!open)} className={classes.option}>
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        <Typography>{period}</Typography>
      </Button>
      <Collapse in={open}>
        <List>
          {options.map((option, index) => (
            <ListItem key={index}>
              <Button onClick={() => setKey(`${period.toLowerCase()}.${option}`)}>
                <ListItemText primary={option.replace('C', ' C').replace('P', ' P')} className={classes.option} />
              </Button>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </ListItem>
  );
};
const SelectGraph: React.FC<SelectGraphProps> = (props) => {
  const { classes } = useStyles();
  const { setKey } = props;

  return (
    <List className={classes.selectList}>
      <PeriodItem
        period={AUTONOMOUS_TITLE}
        options={AUTONOMOUS_OPTIONS}
        setKey={setKey}
      />
      <PeriodItem
        period={TELEOP_TITLE}
        options={TELEOP_OPTIONS}
        setKey={setKey}
      />
      <PeriodItem
        period={ENDGAME_TITLE}
        options={ENDGAME_OPTIONS}
        setKey={setKey}
      />
    </List>
  );
};

export default SelectGraph;
