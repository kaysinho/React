import React, { useState } from "react"
import PropTypes from 'prop-types';


export const AddItem = ({ onNewItem })=>{

    const [input, setInput] = useState('')

    const inputChange = (event)=> setInput(event.target.value);

    const onSubmit = (event) => {
        event.preventDefault(); 
        if (input.trim().length < 1) return;
        onNewItem(input.trim());
        setInput('');
    }

    return ( 
        <form aria-label="form" onSubmit={ onSubmit }>
            <input type="text" placeholder="Add Item" value={ input } onChange={ inputChange } />
        </form>
    )
}

AddItem.propTypes = {
    onNewItem : PropTypes.func.isRequired
}