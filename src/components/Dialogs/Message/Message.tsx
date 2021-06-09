import React from 'react'
import s from './../Dialogs.module.css'



function Message(props: any) {
    return <div className={s.dialog}>{props.message}</div>
}

export default Message