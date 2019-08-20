import React, { useState, useEffect } from 'react'

function UseEffectHoockOne() {
    const [count, setCount] = useState(0)
    //pass as arg f-n executer after every render
    useEffect(()=>{
        document.title = 'Document was updated ' +  count + ' times'
    })

    return (
    <div>
        <button onClick = {() => setCount(count + 1)}>Clicked {count} times </button>
    </div>
    )
}

export default UseEffectHoockOne