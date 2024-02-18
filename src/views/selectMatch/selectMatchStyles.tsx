import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
    selectPage: {
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        alignItems: 'center',
        fontFamily: 'Helvetica'
    },
    mainTitle: {
        fontSize: '50px',
        color: '#ff9c34'
    },
    startButton: {
        margin: '50px',
        backgroundColor: 'green',
        ':hover': {
            backgroundColor: 'darkgreen'
        }
    }
});

export default useStyles;