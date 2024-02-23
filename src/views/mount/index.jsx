import React from 'react';
import './styles.css'
import { FaArrowLeft } from "react-icons/fa6";
import InputMount from '../../components/input-mout/index'
import Button from '../../components/button/index'
import { Link } from 'react-router-dom'
const Mount = () => {
    return (
        <div className='container'>
            <FaArrowLeft size={20} />
            <h1 className='input_title'>Ingreśa el monto</h1>
            <InputMount />
            <div className='select-and-continue'>
                <select>
                    <option>
                        Varios
                    </option>
                </select>
                <Link to='/checkout'>
                <Button title={'Continuar'} width={'30%'} />
                </Link>
            </div>
        </div>
    )
}

export default Mount