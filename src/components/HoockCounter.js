import React, {useState} from 'react'

function HoockCounter() {
    
    //array distructuring
    const [count, sertCount] = useState(0)

    return (
    <div>
        <button onClick = {() => sertCount(count + 1)}>Count {count} </button>
    </div>
    )
}

export default HoockCounter