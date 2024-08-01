import { FC, useEffect } from 'react';
import classes from './Header.module.scss';
import Navbar from '../Navbar/Navbar';
import Headline from '../UI/Headline/Headline';
import Body from '../UI/Body/Body';
import Button from '../UI/Button/Button';
import { useAppSelector } from '@/hooks/redux';

const Header: FC = () => {
    const {displayWidth} = useAppSelector(state => state.displayWidthReducer)

    console.log(displayWidth)

    return (
        <footer className={classes.footer}>
            <div className={classes.content}>
                <Navbar />
                <div className={classes.footer_container}>
                    {displayWidth <= 768 
                    ? 
                        (displayWidth <= 375
                            ? 
                            <div>
                                <Headline pos='center' color='#fff' size={4}>Говорят, никогда не поздно сменить профессию</Headline>
                                <div className={classes.text_container}><Body pos='center' color='#fff' size={16}>Сделай круто тестовое задание и у тебя получится</Body></div>
                            </div>
                            :
                            <div>
                                <Headline pos='center' color='#fff' size={3}>Говорят, никогда не поздно сменить профессию</Headline>
                                <div className={classes.text_container}><Body pos='center' color='#fff' size={16}>Сделай круто тестовое задание и у тебя получится</Body></div>
                            </div>
                        )
                    :
                    <div>
                        <Headline pos='center' color='#fff' size={1}>Говорят, никогда не поздно сменить профессию</Headline>
                        <div className={classes.text_container}><Body pos='center' color='#fff' size={18}>Сделай круто тестовое задание и у тебя получится</Body></div>
                    </div>
                    }
                    <Button color='default'>Проще простого!</Button>
                </div>
            </div>
        </footer>
    )
}

export default Header