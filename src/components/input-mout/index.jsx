import React, { useState } from "react";
import './styles.css'
import { usePayment } from '../../context/ContextPayment';
const InputMount = () => {
    const [input] = useState("0,000")
    const { setTotal } = usePayment()

    return (
        <div className="input-mount-container-wrapper">
        <div className="input-mount-container">
            <span>$</span>
            <input
                onChange={(e) => setTotal(e.target.value)}
                autoFocus
                defaultValue={input}
                className='input-mount' 
                type="text" />
            <span style={{display: input.length !== 5 ? 'none' : 'block'}}>00</span>
        </div>
        <div className="available-credit">
            <p>$84.120 disponibles</p>
        </div>
        </div>
        
    )
}

export default InputMount