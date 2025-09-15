interface Persona {
    nombre: string;
    apellido:string;
    edad:number;   
    direccion: Direccion 
};

interface Direccion {
    calle:  string;
    numero: string;
}

const personaje : Persona = {
    nombre:     'Lufy D.',
    apellido:   'Monkey',
    edad:        25,  
    direccion:  {
        calle:  '20',
        numero: '12-58'
    }
}

const personajeDos : Persona = {
    nombre:     'Ussof',
    apellido:   'Capitan',
    edad:        21,  
    direccion:  {
        calle:  '78',
        numero: 'x1-2d'
    }
}


console.log(personaje, personajeDos);


// const spiderman = structuredClone(persona);

// spiderman.nombre    = 'Peter'
// spiderman.apellido  = 'Parker'
// spiderman.edad      = 30
// spiderman.direccion = 'calle 20 "12-1d' 

// console.log(persona, spiderman);
 