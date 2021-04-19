import s from './Dialogs.module.css'

function Dialogs(props: any) {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>Света</div>
                <div className={s.dialog}>Игорь</div>
                <div className={s.dialog}>Иван</div>
                <div className={s.dialog}>Петя</div>
                <div className={s.dialog}>Саша</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your it?</div>
                <div className={s.message}>I'm fine</div>
                <div className={s.message}>How are you&</div>
            </div>
        </div>

)
}

export default Dialogs