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
    fieldImage: {
        width: '700px'
    },
    ring1: {
        position: 'relative',
        bottom: '255px',
        right: '160px',
        color: 'black',
        '&.Mui-checked': {
            color: 'black'
        }
    },
    ring2: {
        position: 'relative',
        bottom: '255px',
        right: '160px',
        color: 'black',
        '&.Mui-checked': {
            color: 'black'
        }
    },
    ring3: {
        position: 'relative',
        bottom: '255px',
        right: '160px',
        color: 'black',
        '&.Mui-checked': {
            color: 'black'
        }
    },
    ring4: {
        position: 'relative',
        bottom: '400px',
        color: 'black',
        '&.Mui-checked': {
            color: 'black'
        }
    },
    ring5: {
        position: 'relative',
        bottom: '390px',
        color: 'black',
        '&.Mui-checked': {
            color: 'black'
        }
    },
    ring6: {
        position: 'relative',
        bottom: '380px',
        color: 'black',
        '&.Mui-checked': {
            color: 'black'
        }
    },
    ring7: {
        position: 'relative',
        bottom: '370px',
        color: 'black',
        '&.Mui-checked': {
            color: 'black'
        }
    },
    ring8: {
        position: 'relative',
        bottom: '360px',
        color: 'black',
        '&.Mui-checked': {
            color: 'black'
        }
    }
});

export default useStyles;