import { Dialog, Button, DialogContent, IconButton } from "@mui/material";
import jsQR from "jsqr";
import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import useStyles from "./qrReaderStyles";
import executeQuery from "../../graphql/graphqlClient";
import { createMatchData } from "../../graphql/matchDataQueries";
import { Cameraswitch } from "@mui/icons-material";

const ADD_DATA = "Add data from qr code";
const SAVE_DATA = "Save data";

const QrReader: React.FC = () => {
  const { classes } = useStyles();

  const [open, setOpen] = useState<boolean>(false);
  const [isFront, setIsFront] = useState<boolean>(true);

  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<string | null>(null);
  const webcamRef = useRef<Webcam | null>(null);
  const requestRef = useRef<number>();

  const scanQRCode = () => {
    const videoElement = webcamRef.current?.video;
    if (videoElement) {
      const canvas = document.createElement("canvas");
      canvas.width = 1000;
      canvas.height = 1000;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);
        if (code) {
          setData(code.data);
          setOpen(false);
          return;
        } else {
          setError(code ? "Data read" : "No QR code found.");
        }
      }
    }
    requestRef.current = requestAnimationFrame(scanQRCode);
  };

  const saveData = (e: HTMLButtonElement) => {
    data &&
      executeQuery(createMatchData, { input: JSON.parse(data) }).then(
        (response) => {
          if (response) {
            console.log(`'Got data: ${data}`);
            setData("");
            e.textContent = "Saved";
          }
        }
      );
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(scanQRCode);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <>
      <Button className={classes.qrButton} onClick={() => setOpen(true)}>
        {ADD_DATA}
      </Button>
      <p>{data}</p>
      <Button
        className={classes.qrButton}
        onClick={(e) => saveData(e.currentTarget)}
      >
        {SAVE_DATA}
      </Button>
      <Dialog maxWidth="lg" open={open} onClose={() => setOpen(false)}>
        <DialogContent className={classes.dialog}>
          <Webcam
            ref={webcamRef}
            width={1000}
            height={1000}
            screenshotFormat="image/jpeg"
            audio={false}
            videoConstraints={{facingMode: isFront ? 'user' : {exact: 'environment'}}}
          />
          <IconButton onClick={() => setIsFront(prev => !prev)}>
            <Cameraswitch />
          </IconButton>
          {error && <p>{error}</p>}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default QrReader;
