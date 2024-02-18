import DownloadIcon from "@mui/icons-material/Download";
import { IconButton } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import useStyles from "./dataTableStyles.js";

const MAIN_TITLES = [
  "",
  "",
  "",
  "autonomous",
  "",
  "",
  "",
  "",
  "",
  "teleop",
  "",
  "",
  "",
  "endgame",
  "",
  "",
  "comments",
  "",
  ""
];


const SUB_TITLES = [
  "event",
  "match",
  "team",
  "leave",
  "speaker",
  "",
  "amp",
  "",
  "ringsCollected",
  "speaker",
  "",
  "amp",
  "",
  "stage",
  "spotlit",
  "trap",
  "defence",
  "penalties",
  "other"
];

const GP_TITLES = [
  "",
  "",
  "",
  "",
  "success",
  "fail",
  "success",
  "fail",
  "",
  "success",
  "fail",
  "success",
  "fail",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

const DataTable: React.FC<DataTableProps> = (props) => {
  const { classes } = useStyles();
  const { data } = props;

  const createCSV = () => {
    const csv: string =
      MAIN_TITLES.join(",") +
      "\n" +
      SUB_TITLES.join(",") +
      "\n" +
      GP_TITLES.join(",") +
      "\n" +
      data
        .map(
          (row) =>
            row.event +
            "," +
            row.match +
            "," +
            row.team +
            "," +
            row.autonomous.leave +
            "," +
            row.autonomous.speaker.success +
            "," +
            row.autonomous.speaker.fail +
            "," +
            row.autonomous.amp.success +
            "," +
            row.autonomous.amp.fail +
            "," +
            row.autonomous.ringsCollected +
            "," +
            row.teleop.speaker.success +
            "," +
            row.teleop.speaker.fail +
            "," +
            row.teleop.amp.success +
            "," +
            row.teleop.amp.fail +
            "," +
            row.endgame.stage +
            "," +
            row.endgame.spotlit +
            "," +
            row.endgame.trap +
            "," +
            row.comments.defence +
            "," + 
            row.comments.penalties +
            "," +
            row.comments.other +
            ","
        )
        .join("\n");

    window.open(encodeURI("data:text/csv;charset=utf-8," + csv));
  };
  return (
    <div className={classes.container}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {MAIN_TITLES.map((title, index) => (
                <TableCell key={index}>{title}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              {SUB_TITLES.map((title, index) => (
                <TableCell key={index}>{title}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              {GP_TITLES.map((title, index) => (
                <TableCell key={index}>{title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.event}</TableCell>
                <TableCell>{row.match}</TableCell>
                <TableCell>{row.team}</TableCell>
                <TableCell>{String(row.autonomous.leave)}</TableCell>
                <TableCell>{row.autonomous.speaker.success}</TableCell>
                <TableCell>{row.autonomous.speaker.fail}</TableCell>
                <TableCell>{row.autonomous.amp.success}</TableCell>
                <TableCell>{row.autonomous.amp.fail}</TableCell>
                <TableCell>{row.autonomous.ringsCollected.join(', ')}</TableCell>
                <TableCell>{row.teleop.speaker.success}</TableCell>
                <TableCell>{row.teleop.speaker.fail}</TableCell>
                <TableCell>{row.teleop.amp.success}</TableCell>
                <TableCell>{row.teleop.amp.fail}</TableCell>
                <TableCell>{row.endgame.stage}</TableCell>
                <TableCell>{String(row.endgame.spotlit)}</TableCell>
                <TableCell>{String(row.endgame.trap)}</TableCell>
                <TableCell>{row.comments.defence}</TableCell>
                <TableCell>{row.comments.penalties}</TableCell>
                <TableCell>{row.comments.other}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <IconButton className={classes.download} onClick={createCSV}>
        <DownloadIcon className={classes.icon} />
      </IconButton>
    </div>
  );
};

export default DataTable;
