import React, { useEffect } from 'react';
import Input from '../../components/input/index'
import './styles.css'
import { FaArrowLeft } from "react-icons/fa6";
import  Button  from '../../components/button/index'
import { usePayment } from '../../context/ContextPayment';
import { useNavigate, Link } from 'react-router-dom';
const InputPay = () => {
    const { bank, name, cvu } = usePayment()
    const navigate = useNavigate();
    useEffect(() => {
        console.log(bank, name, cvu)
    }, [])
    return (
        <>
        <div className='container'>
          <FaArrowLeft size={20} />
            <h1 className='input_title'>Agregá una cuenta</h1>
            <Input />
        </div>
        <Link to="/mount">
        <Button  width={'90%'} title={'Continuar'} />
        </Link>
        </>
    )
}

export default InputPay