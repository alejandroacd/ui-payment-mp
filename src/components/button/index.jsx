import React from "react";
import './styles.css'
const Button = ({width, title, marginLeft}) => {
    const style = {
        width: width,
        marginLeft: marginLeft
    }
    return (
         <button style={style} type="submit" className='button'>{title}</button>
    )
}

export default Button