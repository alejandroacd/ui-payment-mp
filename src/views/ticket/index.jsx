import React from "react";
import './styles.css';
import { IoCheckmarkSharp } from "react-icons/io5";
import Button from '../../components/button';
import { usePayment } from "../../context/ContextPayment";
const Ticket = () => {
    const { name, bank, cvu, total} = usePayment()
    const nameInitials =  name?.split(' ').map((n) => n[0])
    return (
    <div className="ticket-container">
        <div className="boxes">

            {/* BOX WITH NAME AND BANK */}
            <div className="box">

                <div className="left_side">
                    <h1>¡Listo! Hiciste tu transferencia</h1>
                    <p>A {name}</p>
                    {bank && <span> {bank}</span>} <br/>
                    {cvu && <span>CVU: {cvu}</span>}
                </div>
                <div className="right_side">
                    <div className="rounded_initials">
                        <p>{nameInitials}</p>
                        <div className="rounded-check"> <IoCheckmarkSharp size={20}/></div>
                    </div>
                </div>
            </div>

            {/* BOX WITH AMOUNT AND REASON*/ }
            <div className="box">
                <div className="left_side">
                <h1 style={{fontSize:'25px'}}>${total}</h1>
                <span>Motivo: Varios</span>
                </div>

            </div>

            {/* COUNT OF PAYMENT*/}
            <div className="box">
                <div className="left_side" style={{width:'85%'}}>
                <div className="rounded_initials">
                <img src={'./mp-removebg-preview.png'} width={'10%'} />
                <p>Con dinero en Mercado Pago</p>
                </div>
                
                </div>
            </div>

        </div>
        <div className="ticket-buttons">
        <Button width={'90%'} title="Compartir comprobante" />
        <p>Ir al inicio</p>
        </div>
    </div>
    )
}

export default Ticket