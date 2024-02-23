import React from 'react'
import './styles.css'
import { FiUser } from "react-icons/fi";

const UserInfoCard = ({name, cvu, bank, total}) => {
return (
    <>
    <div className='user-card-info-container'>
    <div className='icon_wrapper'>
    <FiUser size={25} color={'#389FE3'}/>
    </div>
    <h1 className='user-info-name'>{name}</h1>
    {bank && <span className='user-info-details'>{bank}</span>}
    <span className='user-info-details'>CVU: {cvu}</span>
    <div className='checkout-total'>
        <hr />
        <div className='total'>
        <p>Total</p>
        <p>{total}</p>
        </div>
      
    </div>
    </div>
    </>
)
}

export default UserInfoCard