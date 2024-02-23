import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
    autonomousPage: {
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
    },
    ringsCollected: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '200px'
    },
    fieldImage: {
        width: '700px',
        minHeight: '300px',
        backgroundColor: 'gray'
    },
    ring1: {
        position: 'relative',
        bottom: '250px',
        right: '160px',
        color: 'black',
        '&.Mui-checked': {
            color: 'black'
        }
    },
    ring2: {
        position: 'relative',
        bottom: '225px',
        right: '160px',
        color: 'black',
        '&.Mui-checked': {
            color: 'black'
        }
    },
    ring3: {
        position: 'relative',
        bottom: '200px',
        right: '160px',
        color: 'black',
        '&.Mui-checked': {
            color: 'black'
        }
    },
    ring4: {
        position: 'relative',
        bottom: '320px',
        color: 'black',
        '&.Mui-checked': {
            color: 'black'
        }
    },
    ring5: {
        position: 'relative',
        bottom: '290px',
        color: 'black',
        '&.Mui-checked': {
            color: 'black'
        }
    },
    ring6: {
        position: 'relative',
        bottom: '260px',
        color: 'black',
        '&.Mui-checked': {
            color: 'black'
        }
    },
    ring7: {
        margin: '0px',
        position: 'relative',
        bottom: '230px',
        color: 'black',
        '&.Mui-checked': {
            color: 'black'
        }
    },
    ring8: {
        marginBottom: '-300px',
        position: 'relative',
        bottom: '200px',
        color: 'black',
        '&.Mui-checked': {
            color: 'black'
        }
    }
});

export default useStyles;