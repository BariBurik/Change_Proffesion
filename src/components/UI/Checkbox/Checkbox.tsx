import classes from './Checkbox.module.scss'
import { FC } from "react"; 

const Checkbox: FC = () => {
    return (
        <input type='checkbox' className={classes.checkbox}></input>
    )
}

export default Checkbox;