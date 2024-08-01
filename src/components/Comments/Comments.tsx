import { FC } from 'react'
import classes from './Comments.module.scss'
import { useAppSelector } from '@/hooks/redux'
import Headline from '../UI/Headline/Headline'
import Slider from '../Slider/Slider'
import unauthorizedImg from '@/assets/imgs/unauthorize.png'
import user1Img from '@/assets/imgs/user1.png'
import user2Img from '@/assets/imgs/user2.png'


const Comments: FC = () => {
    const {displayWidth} = useAppSelector(state => state.displayWidthReducer)

    const comments = [
        {
            user_img: unauthorizedImg,
            user_name: "Константинов Михаил Павлович",
            user_add_info: "Санкт-Петербург",
            children: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы "
        },
        {
            user_img: user1Img,
            user_name: "Иван Иванов",
            user_add_info: "Санкт-Петербург",
            children: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу."
        },
        {
            user_img: user2Img,
            user_name: "Артем Корнилов",
            user_add_info: "Самара",
            children: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. "
        },
        {
            user_img: unauthorizedImg,
            user_name: "Константин Иванов",
            user_add_info: "Москва",
            children: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно "
        },
        {
            user_img: unauthorizedImg,
            user_name: "Иван Иванов",
            user_add_info: "Новосибирск",
            children: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны."
        }
    ]

    return (
        <div className={classes.comments}>
            <div className={classes.comments_container}>
                {displayWidth > 768 
                ?
                <Headline pos='center' size={2}>Отзывы</Headline>
                :
                <Headline pos='center' size={4}>Отзывы</Headline>
                }
                <Slider comments={comments}/>
            </div>
        </div>
    )
}

export default Comments