import Button from "@mui/material/Button/Button";
import { NavLink } from "react-router-dom";

const BACK = 'Back';
const NEXT = 'Next';
const SUBMIT = 'Submit';

const SELECT_PATH = 'select';

const NavigationButtons: React.FC<NavigationButtonsProps> = (props) => {
    const { prevPath, nextPath } = props;

    const isSubmit = nextPath === SELECT_PATH;

    return (
        <div>
            <NavLink to={'/' + prevPath}>
                <Button variant='contained'>
                    {BACK}
                </Button>
            </NavLink>
            <NavLink to={'/' + nextPath}>
                <Button variant='contained'>
                    {isSubmit ? SUBMIT : NEXT}
                </Button>
            </NavLink>
        </div>
    );
};

export default NavigationButtons