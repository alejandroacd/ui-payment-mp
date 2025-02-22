import React from "react";
import './styles.css';
import { IoCheckmarkSharp } from "react-icons/io5";
import Button from '../../components/button';
import Clock from "../../components/Clock";
import { usePayment } from "../../context/ContextPayment";
import TransactionDate from "../../components/transaction-date";
const Ticket = () => {
    const { name, bank, cvu, total} = usePayment()
    const nameInitials =  name?.split(' ').map((n) => n[0])
    return (
    <div className="ticket-container">
        <div className="boxes">

            {/* BOX WITH NAME AND BANK */}
            <div className="box">

                <div className="left_side" style={{borderRadius:'10px'}}>
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


            {/* 
             <div className="box count">
                <div className="left_side" style={{width:'85%'}}>
              
                <div className="rounded_initials">
                <img src={'./mp-removebg-preview.png'} width={'10%'} />
                <div className="check-price">
                    <p>ads</p>
                    <p>1023</p>

                 </div>
                </div>
                </div>
            </div>
            /*/}
           <div className="box-checkout">
            <div className="rounded_initials image_mp">
                <img src={'./mp-removebg-preview.png'} width={'10%'} />
            </div>
            <div className="amount-and-coming">
                <h1>$ {total}</h1>
                <p>Con Dinero disponible</p>
            </div>
           </div>
           <div style={{marginTop:'1em'}} className="box-checkout">
            <div className="qr-image">
                <img src="/qrcode.png" width={35}/> 
            </div>
            <div className="transaction-information">
                <p className="transaction-id">Operación #77747839892374</p>
                <TransactionDate />
            </div>
           </div>
           <div className="box-checkout ad-banner" style={{marginTop:'2em'}}>
            <div className="text-and-promo">
                <img src="/newsan.jpg" alt="logo" height={'50'} width={'50'} />
                <div className="text-promo">
                    <p className="first_line">mega ofertas</p>
                    <p className="second_line">Bombas hasta con 40% off</p>
                    <p className="third_line"> ver productos</p>
                </div>
            </div>
            <div className="image-of-promo">

                </div>
           </div>

        </div>
        <div className="ticket-buttons">
    <Button width={'90%'} title="Compartir comprobante" />
      <p style={{fontWeight:'bold'}}>Ir al inicio</p>
        </div>
    </div>
    )
}

export default Ticket