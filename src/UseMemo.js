import React, { useEffect, useMemo, useState } from 'react'
// TODO Dont uveruse memo because you are using an actual memory for value cache

function UseMemo() {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    // const doubleNumber = slowFn(number)
    const doubleNumber = useMemo(() => {
        return slowFn(number)
    }, [number])

    // const themeStyles = {
    //     backgroundColor: dark ? 'black' : 'white',
    //     color: dark ? 'white' : 'black' 
    // }

    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        }
    }, [dark])


    useEffect(() => {
        console.log("Changed theme")
        // calls on num update as well
    }, [themeStyles])


    // TODO Slow is not only for num change but for btn click, which has nothing to do with it <<<<<< 1

    return (
        <div>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark(!dark)}>Theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </div>
    )
}

// if num is same the output is the same as was. noo need to recall
function slowFn(num) {
    console.log("Slow fn works")
    for (let i = 0; i <= 1_000_000_000; i++) { }
    return num * 2
}

export default UseMemo