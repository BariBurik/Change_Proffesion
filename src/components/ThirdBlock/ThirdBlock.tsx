import classes from './ThirdBlock.module.scss';
import { FC } from 'react';
import Container from '../Container/Container';
import Headline from '../UI/Headline/Headline';
import Body from '../UI/Body/Body';
import { useAppSelector } from '@/hooks/redux';
import thirdBlockPng from '@/assets/imgs/thirdBlock.png';

const ThirdBlock: FC = () => {
    const {displayWidth} = useAppSelector(state => state.displayWidthReducer)

    return (
        <div id='third_block' className={classes.third_block}>
            <Container>
                <div className={classes.container}> 
                    <div className={classes.text_container}>
                        {displayWidth > 768 
                        ?
                        <Headline size={3}>Круто, ты дошел до третьего блока</Headline>
                        :
                        <Headline size={5}>Круто, ты дошел до третьего блока</Headline>}
                        <div className={classes.text}>
                            <Body color='#5E646A' size={16}>63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽.</Body>
                            <Body color='#5E646A' size={16}>Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах.</Body>
                        </div>
                    </div>
                    <img className={classes.img} src={thirdBlockPng}/>
                </div>
            </Container>
        </div>
    )
}

export default ThirdBlock