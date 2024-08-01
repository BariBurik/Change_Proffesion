import Body from '../Body/Body';
import Headline from '../Headline/Headline';
import classes from './CommentItem.module.scss'
import { FC } from "react";


export interface CommentItemProps {
    user_img: string,
    user_name: string,
    user_add_info?: string,
    children: string
}

const CommentItem: FC<CommentItemProps> = ({user_img, user_name, user_add_info, children}) => {
    return (
        <div className={classes.comment_container}>
            <div className={classes.user_info}>
                <img className={classes.avatar} src={user_img} />
                <div className={classes.info_container}>
                    <Headline size={6}>{user_name}</Headline>
                    {user_add_info && <Body size={12}>{user_add_info}</Body>}
                </div>
            </div>
            <div className={classes.comment_text}><Body size={14}>{children}</Body></div>
        </div>
    )
}

export default CommentItem;