import classes from './Caption.module.scss';
import { FC } from "react";

interface CaptionProps {
    children: string
    size: 12
}

const Caption: FC<CaptionProps> = ({children, size}) => {
    return (
        <p className={`${classes.caption} ${classes[`size_${size}`]}`}>{children}</p>
    )
}

export default Caption;