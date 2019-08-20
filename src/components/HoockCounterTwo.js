import React, {useState} from 'react'

function HoockCounterTwo() {
    const initialCount = 0
    //array distructuring
    const [count, setCount] = useState(0)

    const incrementFive = ()=>{
        for (let i = 0; i < 5 ; i++){
            //istead
            //setCount(count + 1)
            setCount(previousCount => previousCount + 1)
        }
      }

    return (
    <div>
        Count: {count}
        <button onClick = {() => setCount(initialCount)}>Reset </button>
        <button onClick = {() => setCount(count + 1)}>Increment </button>
        <button onClick = {() => setCount(count - 1)}>Decrement </button>
        <button onClick = {incrementFive}>Increment 5 </button>
    </div>
    )
}

export default HoockCounterTwo