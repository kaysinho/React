import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])
    useEffect(()=>{
        getGifs(category).then( data => setImages(data));
    }, []);

    return (
        <>
            <h3> { category } </h3>
            
            <ol>
                { images.map( (img )=> <li key={ img.id }> { img.title } </li>) }
            </ol>
        </>
    );
}

export default GifGrid;