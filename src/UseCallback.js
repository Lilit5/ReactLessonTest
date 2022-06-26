import React, { useCallback, useEffect, useState } from 'react'

function UseCallback() {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    const themeStyles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }

    // TODO this fn recreates every time some state updates, doesn't matter which state (related to him or not)
    // const getItems = () => {
    //     return [number, number + 1, number + 2]
    // }

    // usecallback gives fn not value, and you can pass parametres here as well
    const getItems = useCallback((num) => {
        return [number + num, number + 1 + num, number + 2 + num]
    }, [number])

    useEffect(() => {
        console.log("getItem updated")
    }, [getItems])


    return (
        <div>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark(!dark)}>Theme</button>
            <div style={themeStyles}>{
                getItems(2).map(el => {
                    return <p key={el}>{el}</p>
                })
            }</div>
        </div>
    )
}

export default UseCallback