import React from "react"
import { usePhone } from "./PhoneProvider"

export default function Phones() {
    const value = usePhone()
  
    return (<div className="componentPhne">
      This is phones
      <button onClick={() => value.setPhone({ count: 1, name: 'iPhone13' })}>add to card</button>
    </div>)
  }