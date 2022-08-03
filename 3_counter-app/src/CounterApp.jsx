import { Fragment, useState } from "react"
import { PropTypes } from "prop-types"


export const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState(value);

    const increment = ()=>{
        setCounter(counter+1)
    }

    
    const decrement = ()=>{
        setCounter(counter-1)
    }

    const reset = ()=>{
        setCounter(value)
    }


    return (
        <Fragment>
            <h1>Counter App</h1>
            <h2> { counter } </h2>
            <button onClick={ increment }>+1</button>
            <button onClick={ decrement }>-1</button>
            <button onClick={ reset }>Reset</button>
        </Fragment>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}