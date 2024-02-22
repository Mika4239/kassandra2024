import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
    qrButton: {
        margin: '20px 50px',
        padding: '10px',
        fontSize: '16px',
        backgroundColor: '#ff9c34',
        color: 'white',
        ":hover": {
            backgroundColor: 'orangered'
        }
    },
    dialog: {
        padding: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default useStyles;