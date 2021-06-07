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
    let dialogs = [
        {id: 1, name: 'Наталья'},
        {id: 2, name: 'Игорь'},
        {id: 3, name: 'Иван'},
        {id: 4, name: 'Петя'},
        {id: 5, name: 'Саша'},
        {id: 6, name: 'Виктор'},
    ]
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it?'},
        {id: 3, message: 'I\'m fine'},
        {id: 4, message: 'How are you?'},
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>

    )
}

export default Dialogs