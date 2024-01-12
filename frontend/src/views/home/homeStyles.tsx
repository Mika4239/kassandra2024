import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
    homePage: {
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Helvetica'
    },
    homeTitle: {
        fontSize: '50px',
        color: '#ff9c34'
    }
});

export default useStyles;