import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
    qrButton: {
        margin: '20px 50px',
        padding: '10px',
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
    mainTitle: {
        fontSize: '50px'
    }
});

export default useStyles;