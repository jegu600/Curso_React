import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.moke";
import { CustomHeader } from "./shared/components/CustomHeader";
import { CustomSearch } from "./shared/components/CustomSearch";

export const GifsApp = () => {
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
            />


            {/* Busquedas previas */}
            <PreviousSearches />

            {/* Gits */}
            <div className="gifs-container" >
                {
                    mockGifs.map((git) => (
                        <div key={git.id} className="gif-card">
                            <img src={git.url} alt={git.title} />
                            <h3>{git.title}</h3>
                            <p>{git.width}x{git.height}</p>
                        </div>
                    ))
                }
            </div >


        </>
    )
}
