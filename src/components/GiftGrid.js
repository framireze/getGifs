import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGift } from '../helpers/getGifs';

export const GiftGrid = ( {category}) => {

    //const [images, setImages] = useState([]);
    const {data:images, loading} = useFetchGifs(category);
    //console.log(state);
    // useEffect( () =>{
    //     getGift(category)
    //         .then(imgs => setImages(imgs))
    // }, [category])                      //al colocar la lista vacia le indicamos q solo se ejecute cuando el componente es renderizado por 1 vez, sin esto cada vez q exista un cambio lo volvera a ejecutar siempre

    
    return (
        <>
            <h3>{category}</h3>    
            { loading ? <p>Loading ...</p> : null}
            <div className="card-grid">
                    {
                    images.map((img) => (                  //con parentesis es un retorno implicito
                            <GifGridItem 
                                key = {img.id}
                                img={img}/>
                    )
                    )} 
            </div>
        </>
    )
}
