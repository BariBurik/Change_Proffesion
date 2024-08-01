import { FC } from "react";
import classes from './Ellipse.module.scss'

interface EllipseProps {
    color: 'black' | 'dark-grey' | 'mid-grey' | 'light-grey' | 'extralight-grey' | 'white' | 'dangerous' | 'green-success' | 'primary';
    size?: 24;
}

const Ellipse: FC<EllipseProps> = ({color, size}) => {
    return ( 
        <div className={`${classes.ellipse} ${classes[`color_${color}`]} ${size && classes[`size_${size}`]}`}></div>
     );
}

export default Ellipse;