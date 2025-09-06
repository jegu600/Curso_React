const nombrePersonaje = ['Goku', 'Vegueta', 'Truns'];

// const [p1, p2, p3] = nombrePersonaje;
const [, , p3] = nombrePersonaje;

console.log(p3 );


const returnArray = (  ) => {
    return ['ABC', 123];
};

const [ letter, numbers ] = returnArray();
console.log(letter, numbers);


const useState = ( valorInicial:string ) => {
    return [
        valorInicial,
        (name:string) => {
          console.log(name);      
        },
    ] as const;
};

const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime "Vegeta"


