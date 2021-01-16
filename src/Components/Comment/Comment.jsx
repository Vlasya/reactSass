import s from './Comment.module.sass'
import {Avatar} from "../Avatar/Avatar";
import {Name} from "../Name/Name";


export const Comment =(props)=>{

    return(
        <div className={s.wrapper}>
            <div className={s.comment}>
                <Avatar user={props.user} />
                <div className={s.info}>
                    <Name name={props.user}/>
                    <p className={s.text}>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

