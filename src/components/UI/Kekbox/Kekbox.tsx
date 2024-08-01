import Body from '../Body/Body';
import Checkbox from '../Checkbox/Checkbox';
import classes from './Kekbox.module.scss'
import { FC, useState } from "react"; 

interface KekboxProps {
    children: string
}

const Kekbox: FC<KekboxProps> = ({children}) => {

    return (
        <div className={classes.kekbox}>
            <Checkbox/>
            <Body size={16}>{children}</Body>
        </div>
    )
}  

export default Kekbox