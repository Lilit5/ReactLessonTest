import React, { useEffect, useRef, useState } from 'react'

export default function TestComponent() {
    const [inpVal, setInpVal] = useState('')
    const inputRef = useRef()
    console.log(inputRef.current)
    // console.log(count)

    // useEffect(() => {
    //     console.log("updated")
    //     // setCount(count+1)
    //     count.current += 1
    // })
    

    // useEffect(() => {
    //     prevVal.current = inpVal
    // }, [inpVal])

    const handleBtn = () => {
        inputRef.current.focus()
        inputRef.current.value = "aaaaaaa"
    }
    
    return (
        <div>
            <input ref={inputRef} value={inpVal} onChange={(e) => setInpVal(e.currentTarget.value)}/>
            <p>value is: {inpVal}</p>
            {/* <p>previous {prevVal.current}</p> */}
            <button onClick={handleBtn}>click</button>
        </div>
    )
}
