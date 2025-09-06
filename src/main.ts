import './style.css';

// import './bases/01-const-let';
// import './bases/02-template-string';
// import './bases/03-object-literal';
// import './bases/04-arrays';
// import './bases/05-funciones';
// import './bases/06-desestruturacion-objetos';
// import './bases/07-desestruturacion_arreglos';
import './bases/08-importaciones_exportaciones';
// import { getHeroesByOwner } from './bases/08-importaciones_exportaciones';
// import { Owner } from './data/heroes.data';



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  <h1>hola mundo</h1>
  <h1></h1>
  </div>
`
// console.log( getHeroesByOwner(Owner.DC) )