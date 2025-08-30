interface Persona {
    key: string,
    nombre:string,
    apellido: string,
    user: string,
    edad:number,
    rango?: string,
}

interface Hero {
    key: string,
    nombre:string,
    apellido: string,
    user: string,
    edad:number,
    poder?: string,
}

const persona : Persona =  {
    nombre: 'Jhon',
    apellido: 'Geaano',
    user: 'jegu',
    key:'superman',
    edad:12,
}

// const { apellido, nombre, user } = persona;
// console.log(apellido, nombre, user);


const useContext = ( { key, nombre, apellido, poder, edad } : Hero ) => {
    return {
        keyName: key,
        usuario:{
            nombre,
            apellido,
            poder,
        },
        edad,
    };
};

const { edad, keyName, usuario } = useContext(persona);

const { apellido, nombre } = usuario
console.log(edad, keyName);
console.log(apellido, nombre, 'hola');

