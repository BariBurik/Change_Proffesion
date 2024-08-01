import classes from './Button.module.scss'
import { FC } from "react";

interface ButtonProps {
    children: string,
    color?: 'primary' | 'default',
}

const Button: FC<ButtonProps> = ({children, color}) => {
    return (
        <button className={`${classes.button} ${color ? classes[`color_${color}`] : classes.color_default}`}>{children}</button>
    )
}

export default Button