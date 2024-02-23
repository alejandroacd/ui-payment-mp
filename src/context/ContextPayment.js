import React, { createContext, useContext, useState } from 'react';

export const ContextPayment = createContext();
export const usePayment = () => useContext(ContextPayment);

export const PaymentContextProvider = ({ children }) => {
   const [cvu, setCvu] = useState("");
   const [bank, setBank] = useState(null);
   const [name, setName] = useState("");
   const [total, setTotal] = useState(0);

    const value = {
        
        cvu,
        setCvu,
        bank,
        setBank,
        name,
        setName,
        total,
        setTotal
    };

    return (
        <ContextPayment.Provider value={value}>
            {children}
        </ContextPayment.Provider>
    );
};