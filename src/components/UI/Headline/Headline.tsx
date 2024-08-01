import { FC } from "react";
import classes from './Headline.module.scss'

interface HeadlineProps {
    children: string
    size: 1 | 2 | 3| 4 | 5 | 6,
    color?: string
    pos?: 'left' | 'center' | 'right'
}

const Headline: FC<HeadlineProps> = ({children, size, color, pos}) => {
    
    const hColor = color ? {color} : {};
    const hPos = pos ? {textAlign: pos} : {};

    return ( 
        <p style={{...hColor, ...hPos}} className={`${classes.headline} ${classes[`size_${size}`]}`}>{children}</p>
    );
}

export default Headline;