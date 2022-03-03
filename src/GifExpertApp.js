import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

export const GifExpertApp = () => {
    //const categorias = ['One Punch Man', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['']);
    const handlerAdd = ()=>{
        setCategories( category => [...category, 'Trunks']);                //setCategories, recibe un callback donde viene el "valor del estado anterior" y tenemos q retornar el valor del nuevo estado
    }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            <button onClick={handlerAdd}>Agregar</button>
            <ol>
                { categories.map((category)=>(
                    <GiftGrid 
                        key={ category } 
                        category = { category }
                    /> )
                )
                }
            </ol>
        </>
    )
}
