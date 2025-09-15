//definicion de INTERFACES
interface User {
    uid: string,
    userName: string,
}

function greet( name:string ):string {
   return `Hola ${ name} `; 
// return 123;
}


// retornar valor sin llaves
const greet2 = ( name:string ) => `2-hola ${name} sin llaves` ;

 
const persona = ( nombre:string ): string => {
    return nombre ;
};


const getUser = () : User => {
    return {
        uid: 'abc-123',
        userName: 'jegu',
    };
};


// retornar valor sin llaves
const getUser2 = () : User =>(
    {
        uid: 'abc-123',
        userName: 'jegu',
    }
);

const myNumber: number[] = [1, 2, 3, 4];

// myNumber.forEach(function (value) {
//     console.log({value});  
// })

// myNumber.forEach( (value) => {
//     console.log({value});  
// })


myNumber.forEach(console.log);


console.log( greet('Goku') );
console.log( greet2('Vegeta') );
console.log( persona('Jhon Galeano') );
console.log( getUser() );
console.log( getUser2() );