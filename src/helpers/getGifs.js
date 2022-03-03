export const getGift = async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Dm0u6jInYJlm8k7YeFVCeIIcW4vbhuDu&q=${encodeURI(category)}&limit=20`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifts = data.map( (img) =>{            
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url               //si trae images, debe traer la url
        }
    })
    console.log(gifts);
    return gifts;
}