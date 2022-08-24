
export const getGifs = async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ra6TyFuS7iqV0f9DKh4ltt6FtSi8NzWf&limit=10&q=${ category }`;
    const body = await fetch(url)
    const { data } = await body.json();

    let gifs =  data.map( img => {
        return {
            id : img.id,
            title : img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs;
    
}
