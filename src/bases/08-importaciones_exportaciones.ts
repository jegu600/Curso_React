import { heroes, Hero, Owner} from "../data/heroes.data";


const getHerobyId = ( id: number ) : Hero | undefined => {

    const hero = heroes.find( (hero)=>{
        return hero.id === id;
        }
    );
    if(!hero){
        // throw new Error(`No existe el heroe con numero de id ${id}`);
        // alert(`No existe el heroe con numero de id ${id}`);
    }
    return hero;
};

export const getHeroesByOwner = ( owner:Owner ) => {
    const filterHeroes = heroes.filter( 
        hero => hero.owner === owner
    )
    return filterHeroes;
};

// console.log( getHerobyId(7) );