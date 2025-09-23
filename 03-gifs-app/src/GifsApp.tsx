import { useState } from "react";


import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { CustomSearch } from "./shared/components/CustomSearch";
import { GifList } from "./gifs/components/GifList";
import { mockGifs } from "./mock-data/gifs.moke";



export const GifsApp = () => {

    const [previusSearchs, setSearchs] = useState(['goku', 'Lufy']);

    const handleResClick = (res: string) => {
        return console.log({ res });
    };

    const handleSearch = (query: string) => {

        query = query.trim().toLowerCase();

        if (query.length === 0) {
            return console.log('esta vacio');
        }

        if (previusSearchs.includes(query)) return;

        const currentSearch = previusSearchs.slice(0, 6);

        currentSearch.unshift(query);

        setSearchs(currentSearch);
    };

    return (
        <>
            {/* header */}
            <CustomHeader
                titulo='Buscador'
                descripcion='Esto es para buscar el mejor Git'
            />

            {/* buscador */}
            <CustomSearch
                ClassNameProp="search-container"
                typeProp="text"
                placeHolderProp="Buscar gifs"
                nameButtonProp="Buscar"
                // funciones o eventos
                onQuery={handleSearch}
            />

            {/* Busquedas previas */}
            <PreviousSearches
                searchs={previusSearchs}
                onLabelClick={handleResClick}
            />

            {/* Gits */}
            < GifList gifs={mockGifs} />

        </>
    )
}
