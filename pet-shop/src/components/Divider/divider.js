import PetsIcon from '@mui/icons-material/Pets';
import './divider.scss';

export default function Divider(){
    return(
        <div className="divider">
            <PetsIcon></PetsIcon>
            <PetsIcon></PetsIcon>
            <PetsIcon></PetsIcon>
            <PetsIcon></PetsIcon>
        </div>
    );
}