import React from "react";
import s from './Header.module.css';


type HeaderType = {
}

const Header: React.FC<HeaderType> = (props) => {
    return (
        <header className={s.header}>
            <h1>sdfsdf</h1>
        </header>
    )
}

export default Header