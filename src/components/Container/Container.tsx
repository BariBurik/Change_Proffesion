import { FC } from 'react';
import classes from './Container.module.scss';

interface ContainerProps {
    children: React.ReactNode
}

const Container: FC<ContainerProps> = ({children}) => {
    return (
        <div className={classes.container}>
            {children}
        </div>
    )
}

export default Container