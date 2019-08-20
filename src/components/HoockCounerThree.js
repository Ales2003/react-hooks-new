import React, {useState} from 'react'

function HoockCounerThree() {
    const [name, setName] = useState({firstName: '', lastName: ''})

    return (
    <form>
        <input 
            type = "text"
            value = {name.firstName}
            onChange = {e => setName({ ...name, firstName: e.target.value })}
        />
        <input 
            type = "text"
            value = {name.lastName}
            onChange = {e => setName({ ...name, lastName: e.target.value })}
        />
        
        <h2>Your first name is - {name.firstName}</h2>
        <h2>Your last name is - {name.lastName}</h2>

        <h2>{JSON.stringify(name)}</h2>

        {/* <button onClick = {() => setCount(initialCount)}>Reset </button>
        <button onClick = {() => setCount(count + 1)}>Increment </button>
        <button onClick = {() => setCount(count - 1)}>Decrement </button>
        <button onClick = {incrementFive}>Increment 5 </button> */}
    </form>
    )
}

export default HoockCounerThree