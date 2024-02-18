import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
    selectList: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
        alignItems: 'start'
    },
    option: {
        color: 'black',
        alignItems: 'center'
    }
});

export default useStyles;