import React, { useContext, useState } from 'react'

const PhoneContext = React.createContext()

export function usePhone() {
    return useContext(PhoneContext)
}

export default function PhoneProvider(props) {
    const [phone, setPhone] = useState({ count: 0, name: '' })

    return (
        <PhoneContext.Provider value={{ phone, setPhone }}>
            {props.children}
        </PhoneContext.Provider>
    )
}
