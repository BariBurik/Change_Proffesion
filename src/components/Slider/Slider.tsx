import { useAppSelector } from '@/hooks/redux';
import CommentItem, { CommentItemProps } from '../UI/CommentItem/CommentItem';
import classes from './Slider.module.scss'
import { FC, useEffect, useState } from "react";

interface SliderProps {
    comments: CommentItemProps[]
}

const Slider: FC<SliderProps> = ({comments}) => {

    const commentLength = comments.length 
    const [chechedRadio, setChechedRadio] = useState(0)
    const [visibaleComments, setVisibaleComments] = useState([0, 1, 2])

    const displayWidth = useAppSelector(state => state.displayWidthReducer.displayWidth);

    const radioIncrement = () => {
        let thisRadio = chechedRadio + 1 
        if (thisRadio > commentLength - 1) {
            thisRadio = 0
        }
        setChechedRadio(thisRadio)
    }

    const radioDecrement = () => {
        let thisRadio = chechedRadio - 1 
        if (thisRadio < 0) {
            thisRadio = commentLength - 1
        }
        setChechedRadio(thisRadio)
    }

    useEffect(() => {
        if (displayWidth > 768) {
            let second = chechedRadio + 1 
            if (second > commentLength - 1) {
                second = 0
            }
            let third = second + 1
            if (third > commentLength - 1) {
                third = 0
            }
            const visibaleComments = [chechedRadio, second, third]
            setVisibaleComments(visibaleComments)
        } else if (displayWidth <= 768 && displayWidth > 375) {
            let second = chechedRadio + 1 
            if (second > commentLength - 1) {
                second = 0
            }
            const visibaleComments = [chechedRadio, second]
            setVisibaleComments(visibaleComments)
        } else if (displayWidth < 376) {
            const visibaleComments = [chechedRadio]
            setVisibaleComments(visibaleComments)
        }
    }, [chechedRadio, displayWidth])

    const commentVisibleCondition = (index: number) => {
        if (visibaleComments.includes(index)) {
            return 'block';
        } else {
            return 'none';
        }
    }

    return (
        <div className={classes.slider}>
            <div className={classes.slider_container}>
                <button className={`${classes.arrow} ${classes.arrow_left}`} onClick={radioDecrement}/>
                <div className={classes.slider_content}>
                    <div className={classes.slider_items}>
                        {comments.map((comment, index: number) => 
                            <div style={{ display: commentVisibleCondition(index) }} key={index} className={classes.slider_item}>
                                <CommentItem user_add_info={comment.user_add_info && comment.user_add_info} user_img={comment.user_img} user_name={comment.user_name}>{comment.children}</CommentItem>
                            </div>
                        )}
                    </div>
                    <div>
                        {Array.from({length: commentLength}).map((_, index) => (
                            <input key={index} type="radio" name="slider" className={classes.slider_input} id={`radio${index}`} checked={index === chechedRadio} onChange={() => setChechedRadio(index)}/>
                        ))}
                    </div>
                </div>
                <button className={`${classes.arrow} ${classes.arrow_right}`} onClick={radioIncrement}/>
            </div>
        </div>
    )
}

export default Slider