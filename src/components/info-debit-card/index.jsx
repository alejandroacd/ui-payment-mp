import React from 'react'
import './styles.css'
import Button from '../button'
import { TbEyeClosed } from "react-icons/tb";
import { Link } from 'react-router-dom';
const InfoDebitCard = () => {
    return (
        <div className='info-debit-card-container'>
            <div className='debit-card'>
                <div className='debit-card-logo-line'>
                <img src={'./mercado-pago-logo-vector-2023-removebg-preview.png'}
                width={'20%'}
                />
                <p>$ *** <TbEyeClosed size={20}/> </p>
                </div>
                <div className='money-available'>DINERO DISPONIBLE</div>
                <div className='comision-wrapper'>
                    Sin comisión
                </div>
            </div>
            <Link to='/ticket' >
            <Button width={'90%'} title={'Continuar'}/>
            </Link>
        </div>
    )
}

export default InfoDebitCard