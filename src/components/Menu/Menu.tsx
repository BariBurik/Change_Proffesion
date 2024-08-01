import Logo from '../Logo/Logo';
import Body from '../UI/Body/Body';
import classes from './Menu.module.scss'
import { FC, useState } from "react";

interface MenuProps {
    anchors: string[];
}

const Menu: FC<MenuProps> = ({anchors}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classes.menu}>
            {isOpen && <div className={classes.menu_content}>
                <div className={classes.menu_opened_nav}>
                    <Logo/>
                    <div className={classes.menu_close} onClick={() => setIsOpen(false)}>&#10006;</div>
                </div>
                <div className={classes.menu_body}>
                    <div className={classes.menu_item}>
                        <div className={classes.line}></div>
                        <div className={classes.item_container}>
                            <a href={anchors[0]}><Body size={18} color='#83898F'>Как это работает</Body></a>
                            <div className={classes.arrow}></div>
                        </div>
                        <div className={classes.line}></div>
                    </div>
                    <div className={classes.menu_item}>
                        <div className={classes.item_container}>
                            <a href={anchors[1]}><Body size={18} color='#83898F'>3-й блок</Body></a>
                            <div className={classes.arrow}></div>
                        </div>
                        <div className={classes.line}></div>
                    </div>
                    <div className={classes.menu_item}>
                        <div className={classes.item_container}>
                        <a href={anchors[2]}><Body size={18} color='#83898F'>Вопросы и ответы</Body></a>
                            <div className={classes.arrow}></div>
                        </div>
                        <div className={classes.line}></div>
                    </div>
                    <div className={classes.menu_item}>
                        <div className={classes.item_container}>
                            <a href={anchors[3]}><Body size={18} color='#83898F'>Форма</Body></a>
                            <div className={classes.arrow}></div>
                        </div>
                        <div className={classes.line}></div>
                    </div>
                </div>
            </div>}
            {!isOpen && 
            <div className={classes.menu_btn} onClick={() => setIsOpen(!isOpen)}>
                <div className={classes.menu_btn_line}></div>
                <div className={classes.menu_btn_line}></div>
            </div>}
        </div>
    )
}

export default Menu;