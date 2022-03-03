import {useState, useEffect} from 'react';
import { getGift } from '../helpers/getGifs';
export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect( () =>{
             getGift(category)
                 .then(imgs => {
                     
                         setstate({
                         data: imgs,
                         loading: false
                        })
                    
                })
         }, [category])                      //al colocar la lista vacia le indicamos q solo se ejecute cuando el componente es renderizado por 1 vez, sin esto cada vez q exista un cambio lo volvera a ejecutar siempre
    return state;       //{data:[], loading: true}
}