import type { GiftRamdon } from "../data/gits.data";

const API_KEY = 'ECu9TnnGgWuI5imPlC9zWAWYCP7wiPAb';


const peticion_http = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

// peticion_http.then( ( response ) => {
//     response.json().then( ( data ) => {
//         console.log(data);    
//     })
// })

const crearImgDOM = ( url: string ) => {
    const crearElementoIgm = document.createElement('img');
    crearElementoIgm.src = url;

    document.body.append(crearElementoIgm);


    
};

peticion_http
    .then(  ( response ) => response.json() )
    .then( ( { data } : GiftRamdon ) => {
        const imageUrl = data.images.original.url;
       
        crearImgDOM(imageUrl);
    })

    .catch( ( err ) => {
    console.log(err , "error en la peticion" )
    })
    