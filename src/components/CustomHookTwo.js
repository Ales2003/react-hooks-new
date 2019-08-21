import React, {useState, useEffect} from 'react'

function CustomHookOne() {
    const [count, sertCount] = useState(0)
    
     useEffect(() => {
        document.title = `Count ${count}`
    }, [count])

    return (
    <div>
        <button onClick = {() => sertCount(count + 1)}>Count {count} </button>
    </div>
    )
}

export default CustomHookOne