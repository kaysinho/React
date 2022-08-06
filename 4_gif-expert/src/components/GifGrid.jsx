import { useEffect, useState } from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import GifItem from "./GifItem";


const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category )

    return (
        <>
            <h3> { category } </h3>
            {
                isLoading && (<h2>Loading...</h2>) 
            }
            
            <div className="card-grid">
                { images.map( (img )=> <GifItem key={ img.id } img={ img }/>) }
            </div>
        </>
    );
}

export default GifGrid;