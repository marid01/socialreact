// import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

function Dialogs(props: any) {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Света</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Игорь</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Иван</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Петя</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Саша</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6">Виктор</NavLink>
                </div>
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