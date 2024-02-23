import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import QRCode from "qrcode.react";
import { useAppSelector } from "../../redux/hooks";
import { Button } from "@mui/material";
import React, { useState } from "react";
import useStyles from "./qrDialogStyles";

const QR_TITLE = "QR";

const QR_INSTRUCTIONS = "Generate qr code";

const QrDialog: React.FC = () => {
  const { classes } = useStyles();

  const [open, setOpen] = useState<boolean>(false);

  const matchData = useAppSelector((state) => state.matchData);

  return (
    <>
      <Button className={classes.qrButton} onClick={() => setOpen(true)}>
        {QR_INSTRUCTIONS}
      </Button>
      <Dialog
        fullWidth
        maxWidth='lg'
        onClose={() => setOpen(false)}
        open={open}
      >
        <DialogContent className={classes.dialog}>
            <DialogTitle className={classes.mainTitle}>{QR_TITLE}</DialogTitle>
            <QRCode size={200} value={JSON.stringify(matchData)} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default QrDialog;
