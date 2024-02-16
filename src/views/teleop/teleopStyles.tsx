import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
    teleopPage: {
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
    countButtons: {
        display: 'flex'
    },
    successButton: {
        margin: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#adebad',
        borderRadius: '30px',
        padding: '10px'
    },
    failButton: {
        margin: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#ffb3b3',
        borderRadius: '30px',
        padding: '10px'
    }
});

export default useStyles;