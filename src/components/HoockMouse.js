import React, { useState, useEffect } from 'react'

function HoockMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState('')

    //pass as 1. param f-n executer after eery render
    // for condition invoking
    //pass as 2. param array of values  which the effect depends on. Iv value not changes - eccect will be no t invoked
    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }
    
    useEffect(()=>{
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        return() => {
            console.log('Component unmounting called called')
            window.removeEventListener('mousemove', logMousePosition)
        }

    }, [])

    return (
    <div>
        Hooks X - {x} Y - {y}
        
    </div>
    )
}

export default HoockMouse