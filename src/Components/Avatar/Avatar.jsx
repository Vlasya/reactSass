import s from './Avatar.module.sass'


export const Avatar= (props)=>{
    return(
        <div className={s.wrapper}>
            <img src={props.user.avatar} alt="avatart" className={s.avatar}/>
        </div>
    )
}