import s from './Comment.module.sass'


export const Comment =(props)=>{
    return(
        <div className={s.wrapper}>
            <div className={s.comment}>
                <img src={props.user.avatar} alt="" className={s.logo}/>
                <div className={s.info}>
                    <h2 className={s.name}>{props.user.name}</h2>
                    <p className={s.text}>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

