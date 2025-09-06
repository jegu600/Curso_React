const myArray: number[] = [1, 2, 3, 4, 5];
// const myArray: (number | string)[] = [1, 2, '3', 4, 5,'contando numeros'];  **otra manera
myArray.push(84);
 
 
const myArray2 = [...myArray]
myArray2.push(7);
myArray2.push(45);


console.log({myArray2})