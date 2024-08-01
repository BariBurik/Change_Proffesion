import { FC } from 'react'
import classes from './Logo.module.scss'
import logoImg from '@/assets/imgs/logo.png'

const Logo: FC = () => {
    return (
        <div className={classes.menu_logo_container}>
            <img src={logoImg} alt="Logo" />
        </div>
    )
}

export default Logo