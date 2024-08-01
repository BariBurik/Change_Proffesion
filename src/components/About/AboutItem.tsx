import Body from '../UI/Body/Body';
import classes from './About.module.scss'
import { FC } from "react";

interface Props {  
    title: string;
    desc: string;
}

const AboutItem: FC<Props> = ({desc, title}) => {
    return (
        <div className={classes.item}>
            <Body bold size={18}>{title}</Body>
            <Body color='#191C1F' size={16}>{desc}</Body>
        </div>
    )
}

export default AboutItem