import React, { useState } from 'react'
import { usePayment } from '../../context/ContextPayment'
import { Link } from 'react-router-dom'
const CoreData = () => {
    const { setCvu, setBank, setName} = usePayment()
    const style = {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5em',
        width: '90%',
        margin: '0 auto',
        marginTop: '1em',
        inputsStyle: {
            padding:'1em'
        },
        linkStyle: {
            width:'100%'
        }
    }
    return (
        <div style={style}>
        <input onChange={(e) => setCvu(e.target.value)} style={style.inputsStyle} type="text" placeholder='Ingresá el CBU' />
        <input onChange={(e) => setBank(e.target.value)} style={style.inputsStyle} type="text" placeholder='Nombre del banco' />
        <input onChange={(e) => setName(e.target.value)} style={style.inputsStyle} type="text" placeholder='Nombre titular' />
       <Link style={style.linkStyle} to='/destination' ><button> Enviar </button></Link>
        </div>
    )
}

export default CoreData