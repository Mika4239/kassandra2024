import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
    endgamePage: {
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Helvetica'
    },
    mainTitle: {
        fontSize: '50px',
        color: '#ff9c34'
    },
    subTitle: {
        fontSize: '30px',
        color: '#ff9c34' 
    },
    extra: {
        margin: '20px',
        padding: '15px 20px'
    }
});

export default useStyles;