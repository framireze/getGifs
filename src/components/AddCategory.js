import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');

    const handlerInputChange = (e)=>{
        setInputValue(inputValue => e.target.value)
    }

    const handlerOnSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories(c => [inputValue,...c]);
        }
        setInputValue('');
    }

    return (
        <form onSubmit={handlerOnSubmit}>
            <input 
                type = 'text'
                value = {inputValue}
                onChange = { handlerInputChange }
            />
        </form>
    )
}

AddCategory.protoTypes = {
    setCategories: PropTypes.func.isRequired
}