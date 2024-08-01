import { FC } from 'react';
import classes from './HowItWork.module.scss';
import Container from '../Container/Container';
import Headline from '../UI/Headline/Headline';
import waitingPng from '@/assets/imgs/waiting.png';
import deliveryPng from '@/assets/imgs/delivery-truck.png';
import securePng from '@/assets/imgs/secure.png';
import moneyPng from '@/assets/imgs/money-bags.png';
import Body from '../UI/Body/Body';


const HowItWork: FC = () => {
    return (
        <div id='how_it_work' className={classes.how_it_work}>
            <Container>
                <Headline pos='center' size={2}>Как это работает</Headline>
                <div className={classes.items}>
                    <div className={classes.item}>
                        <img className={classes.img} src={waitingPng} alt="Waiting" />
                        <div className={classes.item_text}>
                            <Headline size={6}>Прочитай задание внимательно</Headline>
                            <Body size={14}>Думаю у тебя не займет это больше двух-трех минут</Body>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <img className={classes.img} src={deliveryPng} alt="Waiting" />
                        <div className={classes.item_text}>
                            <Headline size={6}>Изучи весь макет заранее</Headline>
                            <Body size={14}>Подумай как это будет работать на разных разрешениях и при скролле</Body>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <img className={classes.img} src={securePng} alt="Waiting" />
                        <div className={classes.item_text}>
                            <Headline size={6}>Сделай хорошо</Headline>
                            <Body size={14}>Чтобы мы могли тебе доверить подобные задачи в будущем</Body>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <img className={classes.img} src={moneyPng} alt="Waiting" />
                        <div className={classes.item_text}>
                            <Headline size={6}>Получи предложение</Headline>
                            <Body size={14}>Ну тут все просто, не я придумал правила, но думаю так и будет)))</Body>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HowItWork