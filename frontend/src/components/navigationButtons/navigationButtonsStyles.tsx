import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
    navigationButton: {
        margin: '20px 50px',
        padding: '10px',
        backgroundColor: '#ff9c34',
        ":hover": {
            backgroundColor: 'orangered'
        }
    }
});

export default useStyles;