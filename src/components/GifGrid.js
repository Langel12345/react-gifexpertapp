import React from 'react'
import { useFetchGift } from '../hooks/useFetchGift'
import GifGridItem from './GifGridItem'
function GifGrid({categoria}) {
   const {data:images,loading}= useFetchGift( categoria );
    return (
        <> 
        <h3 className="animate__animated animate__fadeIn"> {categoria} </h3>
       {loading && <p>Loading...</p>} 
        <div className="card-grid">
          
            <ol>
                {
                    images.map( img =>(
                        <GifGridItem 
                            key={img.id}
                            { ...img }
                        />
                    ))
                }
            </ol>
            </div>
        </>
    )
}
export default GifGrid
