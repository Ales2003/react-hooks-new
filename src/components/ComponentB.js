import React, { useContext } from 'react'
import { NameContext } from '../App'

function ComponentB() {
    return (
        <div>
            <NameContext.Consumer>
	            {
                name => {
                           return  <p> Current name: {name} </p>
                        }
                }
            </NameContext.Consumer>
        </div>
        )
    }

export default ComponentB