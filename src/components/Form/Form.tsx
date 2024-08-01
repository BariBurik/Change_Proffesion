import classes from './Form.module.scss'
import { FC } from "react";
import { useAppSelector } from '@/hooks/redux';
import Headline from '../UI/Headline/Headline';
import Input from '../UI/Input/Input';
import Kekbox from '../UI/Kekbox/Kekbox';
import Button from '../UI/Button/Button';

const Form: FC = () => {
    const {displayWidth} = useAppSelector(state => state.displayWidthReducer)

    const isHello = (value: any): boolean => {
        if (value === 'Hello') {
            return true
        }
        return false
    }

    const isBB = (value: any): boolean => {
        if (value === 'Bye Bye') {
            return true
        }
        return false
    }

    
    return (
        <div id='form' className={classes.form}>
            <div className={classes.container}>
                {displayWidth > 375 
                ?
                <Headline pos='center' size={2}>Отправить форму</Headline>
                :
                <Headline pos='center' size={4}>Отправить форму</Headline>
                }
                <div className={classes.content}>
                    <div className={classes.item}><Input validationFunc={isHello} placeholder='Ваше имя'>Имя</Input></div>
                    <div className={classes.item}><Input validationFunc={isBB} placeholder='Ваше телефон'>Телефон</Input></div>
                    <div className={classes.item}><Kekbox>Согласен, отказываюсь</Kekbox></div>
                    <div className={classes.item}><Button color='primary'>Отправить</Button></div>
                </div>    
            </div>
        </div>
    )
}

export default Form