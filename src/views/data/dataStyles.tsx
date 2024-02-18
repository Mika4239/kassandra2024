import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
    dataPage: {
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
    graph: {
        width: '80vw',
        height: '20px',
        display: 'flex'
    }
});

export default useStyles;