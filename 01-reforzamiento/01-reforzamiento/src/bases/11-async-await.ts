import type { GiftRamdon } from "../data/gits.data";

const API_KEY = 'ECu9TnnGgWuI5imPlC9zWAWYCP7wiPAb';

const crearImgDOM = ( url: string ) => {
    const crearElementoIgm = document.createElement('img');
    crearElementoIgm.src = url;

    document.body.append(crearElementoIgm); 
};

const obtenerImgUrl = async() : Promise <string> => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

    const { data }:GiftRamdon = await response.json();

    const getUrl = data.images.original.url;

    return getUrl;
}

obtenerImgUrl()
    .then( crearImgDOM )
    .catch( ( err ) => { console.log(err, 'error el la url') })
    


