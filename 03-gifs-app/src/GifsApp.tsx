
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { CustomHeader } from './shared/components/CustomHeader';
import { CustomSearch } from './shared/components/CustomSearch';
import { GifList } from './gifs/components/GifList';
import { useGifs } from './gifs/hooks/useGifs';

export const GifsApp = () => {

    const { previusSearchs, gifs, handleSearch, handleResClick } = useGifs();

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
            < GifList gifs={gifs} />

        </>
    )
}
