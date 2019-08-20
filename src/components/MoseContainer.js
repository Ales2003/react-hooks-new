import React, { useState } from 'react'
import HoockMouse from './HoockMouse';

function MoseContainer() {
    const [display, setDisplay] = useState(true)

    return (
    <div>
        <button onClick = {() => setDisplay(!display)}>Toggle display </button>
        {display && <HoockMouse />}
    </div>
    )
}

export default MoseContainer