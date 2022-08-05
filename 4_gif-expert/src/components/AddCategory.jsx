import { useState } from "react"

export const AddCategory = ({ onNewCategory })=>{

    const [input, setInput] = useState('')

    const inputChange = (event)=> setInput(event.target.value);

    const onSubmit = (event) => {
        event.preventDefault(); 
        if (input.trim().length < 1) return;
        onNewCategory(input.trim());
        setInput('');
    }

    return ( 
        <form onSubmit={ onSubmit }>
            <input type="text" placeholder="Search Gifs" value={ input } onChange={ inputChange } />
        </form>
    )
}