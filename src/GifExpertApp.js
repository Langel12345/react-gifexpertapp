import React, { useState}from 'react'
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';
const GifExpertApp =()=>{
  
    const [categorias,setCategorias ]= useState(['DragonBall']);
   /* const handleAdd =()=>{
        setCategorias([...categorias,'Pokemon']);

    }*/
    
     return(
        <>
        <h2>GifExpertApp</h2>
        <AddCategory  setCategorias={setCategorias} />
        <hr />
        
        <ol>
            {
                categorias.map(categoria =>(
                    <GifGrid 
                        key={ categoria} 
                        categoria={categoria}
                    />

                ))
            }
        </ol>
    </>
    ) 
  
}
export default GifExpertApp;
