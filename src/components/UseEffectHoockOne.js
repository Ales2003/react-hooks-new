import React, { useState, useEffect } from 'react'

function UseEffectHoockOne() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    //pass as 1. param f-n executer after eery render
    // for condition invoking
    //pass as 2. param array of values  which the effect depends on. Iv value not changes - eccect will be no t invoked
    useEffect(()=>{
        console.log('useEffect => Update doc title')
        document.title = 'Document was updated ' +  count + ' times'
    }, [name])

    return (
    <div>
        <input
            type = "text"
            value = {name}
            onChange = {e => {
                setName(e.target.value)
            }}
        />
        <button onClick = {() => setCount(count + 1)}>Clicked {count} times </button>
    </div>
    )
}

export default UseEffectHoockOne