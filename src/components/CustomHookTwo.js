import React, {useState} from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle';

function CustomHookTwo() {
    const [count, sertCount] = useState(0)
    
    useDocumentTitle(count)

    return (
    <div>
        <button onClick = {() => sertCount(count + 1)}>Count {count} </button>
    </div>
    )
}

export default CustomHookTwo