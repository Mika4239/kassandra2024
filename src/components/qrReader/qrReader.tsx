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
const SEND_OFFLINE_DATA = "Send offline data";

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
    if (navigator.onLine) {
      data &&
        executeQuery(createMatchData, { input: JSON.parse(data) }).then(
          (response) => {
            if (response) {
              sendOfflineData();
              console.log(`Got data: ${data}`);
              setData("");
              e.textContent = "Saved";
            }
          }
        );
    } else {
      if (data) {
        const offlineData = getOfflineData();
        offlineData.push(data);
        document.cookie = `offlinedata=${JSON.stringify(offlineData)}`;
        setData("");
        e.textContent = "Saved offline";
      }
    }
  };

  const sendOfflineData = () => {
    const offlineData = getOfflineData();
    console.log(offlineData);
    if (offlineData && offlineData.length > 0) {
      console.log("sending offline data");
      offlineData.forEach(data => {
        console.log(JSON.parse(data));
      })
      offlineData.forEach(data => {
        executeQuery(createMatchData, { input: JSON.parse(data)});
      })
      removeOfflineData();
    } else {
      console.log("No offline data to send");
    }
  };

  const getOfflineData = (): string[] => {
    const cookies = document.cookie.split("; ");
    const offlineDataCookie = cookies.find(
      (cookie) => cookie.startsWith("offlinedata=")
    );
    if (offlineDataCookie) {
      const offlineDataString = offlineDataCookie.split("=")[1];
      return JSON.parse(offlineDataString);
    }
    return [];
  };

  const removeOfflineData = () => {
    document.cookie = "offlinedata=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    console.log("cleared offline data");
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(scanQRCode);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [open]);

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
      <Button
        className={classes.qrButton}
        onClick={() => sendOfflineData()}
      >
        {SEND_OFFLINE_DATA}
      </Button>
      <Button className={classes.qrButton} onClick={() => removeOfflineData()}>
        Clear offline data
      </Button>
      <Dialog maxWidth="lg" open={open} onClose={() => setOpen(false)}>
        <DialogContent className={classes.dialog}>
          <Webcam
            ref={webcamRef}
            width={1000}
            height={1000}
            screenshotFormat="image/jpeg"
            audio={false}
            videoConstraints={{ facingMode: isFront ? 'user' : { exact: 'environment' } }}
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
