import React from 'react'
import { NameContext } from '../App'

function ComponentB(){
    return (
        <div className = "App">
            <NameContext.Consumer>
	            {name => <p>My name is {name} </p>}
            </NameContext.Consumer>
        </div>

    )
}
 
export default ComponentB;