import React, { useEffect } from 'react'
import './styles.css'
import InfoDebitCard from '../../components/info-debit-card'
import UserInfoCard from '../../components/user-info-card'
import { usePayment } from '../../context/ContextPayment'
const Checkout = () => {
    const { cvu, name, bank, total } = usePayment()

    return (
        <div style={{backgroundColor: '#f5f5f5', height:'100vh'}}>
        <UserInfoCard name={name} bank={bank} cvu={cvu} />
        <InfoDebitCard />
        </div>
    )
}

export default Checkout