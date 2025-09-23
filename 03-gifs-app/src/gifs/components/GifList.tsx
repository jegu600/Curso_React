import type { Gif } from "../../mock-data/gifs.moke"

interface Props {
   gifs: Gif[],

}

export const GifList = ({ gifs }: Props) => {
   return (
      <div className="gifs-container" >
         {
            gifs.map((git) => (
               <div key={git.id} className="gif-card">
                  <img src={git.url} alt={git.title} />
                  <h3>{git.title}</h3>
                  <p>{git.width}x{git.height}</p>
               </div>
            ))
         }
      </div >
   )
}
