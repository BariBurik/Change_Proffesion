import { FC } from 'react';
import classes from './QandA.module.scss';
import { useAppSelector } from '@/hooks/redux';
import Headline from '../UI/Headline/Headline';
import QandAItem from './QandAItem';

const QandA: FC = () => {
    const {displayWidth} = useAppSelector(state => state.displayWidthReducer)

    return (
        <div id='q_and_a' className={classes.QandA}>
            <div className={classes.container}>
                {displayWidth > 375 
                ?
                <Headline pos='center' size={2}>Вопросы и ответы</Headline>
                :
                <Headline pos='center' size={4}>Вопросы и ответы</Headline>
                }
                <div className={classes.content}>
                    <QandAItem title='Подтверждено: сознание наших соотечественников не замутнено пропагандой?'/>
                    <QandAItem title='Прототип нового сервиса - это как трубный призыв?'/>
                    <QandAItem title='Частокол на границе продолжает удивлять?' desc='В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.'/>
                    <QandAItem title='Очевидцы сообщают, что слышали грохот грома градущих изменений?'/>
                    <QandAItem title='И по сей день в центральных регионах звучит перекатами печальный плач оппозиции?'/>
                    <QandAItem title='Нынче никто не может себе позволить инициировать треск разлетающихся скреп?'/>
                    <QandAItem title='Высококачественный прототип будущего проекта обнадёживает?'/>
                </div>
            </div>
        </div>
    )
}

export default QandA;