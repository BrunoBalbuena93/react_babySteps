import React from 'react'
import style from './Button.module.css';
const Button = ({text, type, onClick}) => {
    return (
        <button type={type} className={style.button} onClick={onClick}>{text}</button>
    )
}

export default Button
