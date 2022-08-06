import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getGifs(category).then( data => {
            setLoading(false);
            return setImages(data);
        });
    }, []);

    return {
        images,
        isLoading: loading
    };
}
 
export default useFetchGifs;