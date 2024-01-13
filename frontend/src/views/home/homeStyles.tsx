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
    },
    signIn: {
        backgroundColor: '#ff9c34',
        fontSize: '20px',
        margin: '10px',
        ":hover": {
            backgroundColor: 'orangered'
        }
    },
    signUp: {
        color: '#ff9c34',
        fontSize: '20px',
        margin: '10px'
    }
});

export default useStyles;