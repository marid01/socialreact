// import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Dialogs.module.css'

function DialogItem(props: any) {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

function Message(props: any) {
    return <div className={s.dialog}>{props.message}</div>
}

function Dialogs(props: any) {
    let dialogsData = [
        {id: 1, name: 'Света'},
        {id: 2, name: 'Игорь'},
        {id: 3, name: 'Иван'},
        {id: 4, name: 'Петя'},
        {id: 5, name: 'Саша'},
        {id: 6, name: 'Виктор'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Света" id="1"/>
                <DialogItem name="Игорь" id="2"/>
                <DialogItem name="Иван" id="3"/>
                <DialogItem name="Петя" id="4"/>
                <DialogItem name="Саша" id="5"/>
                <DialogItem name="Виктор" id="6"/>

            </div>
            <div className={s.messages}>
                <Message message="Hi" />
                <Message message="How is your it?" />
                <Message message="I'm fine" />
                <Message message="How are you?" />
            </div>
        </div>

    )
}

export default Dialogs