import { FC, useState } from 'react'
import classes from './QandA.module.scss'
import Body from '../UI/Body/Body'

interface Props {  
    title: string;
    desc?: string;
}

const QandAItem: FC<Props> = ({title, desc}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={classes.item}>
            <div onClick={() => setIsOpen(!isOpen)} className={classes.item_wrapper}>
                <Body bold size={18}>{title}</Body>
                {!isOpen && <button className={classes.button} onClick={() => setIsOpen(!isOpen)}>+</button>}
                {isOpen && <button className={classes.button} onClick={() => setIsOpen(!isOpen)}>x</button>}
            </div>
            {isOpen && <Body color='#5E646A' size={18}>{desc ? desc : title}</Body>}
        </div>
    )
}

export default QandAItem