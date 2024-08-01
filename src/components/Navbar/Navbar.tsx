import { useAppSelector } from '@/hooks/redux';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import classes from './Navbar.module.scss'
import { FC } from "react";
import Body from '../UI/Body/Body';


const Navbar: FC = () => {

    const anchors = ['#how_it_work', '#third_block', '#q_and_a', '#form']

    const {displayWidth} = useAppSelector(state => state.displayWidthReducer)

    return (
        <div className={classes.navbar}>
            <Logo />
            {displayWidth <= 768
            ? 
            <Menu anchors={anchors} /> 
            :
            <div className={classes.nav_items}>
                <a href={anchors[0]}><Body size={16} color='#FFF'>Как это работает</Body></a>
                <a href={anchors[1]}><Body size={16} color='#FFF'>3-й блок</Body></a>
                <a href={anchors[2]}><Body size={16} color='#FFF'>Вопросы и ответы</Body></a>
                <a href={anchors[3]}><Body size={16} color='#FFF'>Форма</Body></a>
            </div>
            }
        </div> 
    )
}

export default Navbar