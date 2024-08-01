import { FC } from "react";
import classes from './Body.module.scss'

interface BodyProps {
    bold?: boolean,
    children: string,
    size: 18 | 16 | 14 | 12,
    color?: string;
    pos?: 'left' | 'center' | 'right'
}

const Body: FC<BodyProps> = ({color, size, children, bold, pos}) => {

    const bodyColor = color ? {color} : {};
    const bodyPos = pos ? {textAlign: pos} : {};

    return ( 
        <p style={{ ...bodyColor, ...bodyPos }} className={`${classes.body} ${classes[`size_${size}`]} ${bold && classes.bold}`}>{children}</p>
    );
}

export default Body;