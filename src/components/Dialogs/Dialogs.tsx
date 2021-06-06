import React from 'react'
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