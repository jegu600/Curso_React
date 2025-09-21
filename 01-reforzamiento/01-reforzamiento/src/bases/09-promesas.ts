const myPromesa = new Promise <number>( (resolve, reject) => {
    setTimeout(() => {
    resolve(100) 
    reject('no tengo dinero');
    }, 2000);
});
myPromesa.then( (miDinero) => {
    console.log(`tengo mi dinero ${miDinero}`);
})
.catch( (reason)=>{
    console.warn(reason)
})
.finally( ()=>{
    console.log('Termino la promesa')
});
