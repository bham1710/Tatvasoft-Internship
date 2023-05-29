import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export const HomePage = () => {

    const Navigate = useNavigate();

    const onHomePageButtonClick = () => {
        Navigate("/apple");
    };

    return (<div>
        <div> Home Page 🏠 </div>
        <Button variant="contained" onClick={onHomePageButtonClick}> Navigate to Apple </Button>
    </div>);
};