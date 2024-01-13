import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
    selectPage: {
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Helvetica'
    },
    mainTitle: {
        fontSize: '50px',
        color: '#ff9c34'
    }
});

export default useStyles;