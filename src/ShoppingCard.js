import React from "react";
import { usePhone } from "./PhoneProvider";

export default function ShoppingCard() {
    const phoneTools = usePhone()
    return (
        <div className="component">
            This is card
            <h3>items: {`${phoneTools.phone.count} ${phoneTools.phone.name}`} </h3>
            <br />
            <button onClick={() => phoneTools.setPhone({
                count: phoneTools.phone.count + 1,
                name: 'iPhone13'
            }
            )}>add count</button>
        </div>
    )
}