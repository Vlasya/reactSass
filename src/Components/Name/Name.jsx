import s from './Name.module.sass'


export const Name= ({name: {name}})=>{
    return(
    <div className={s.wrapper}>
        <h2 className={s.name}>{name}</h2>
    </div>
    )
}