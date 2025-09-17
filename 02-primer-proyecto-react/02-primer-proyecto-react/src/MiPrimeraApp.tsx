const MiPrimeraApp = () => {
    const nombre = 'Jhon';
    const Apellido = 'Galeano';
    const juegosFavoritos = ['El Dios de la Guerra', 'Dragon Ball', 'Fifa 2024', 'League of Legend'];
    const isActive = false;

    const direccion = {
        mazana: '2',
        casa: '12',
        barrio: 'Lorena'
    }

    return (
        <>
            <h1> {nombre} </h1>
            <h3> {Apellido} </h3>

            <h3> {juegosFavoritos.join(', ')} </h3>

            <h3> {isActive ? 'Activo' : 'No activo'} </h3>

            <p>
                {JSON.stringify(direccion)}
            </p>

        </>

    );
}
export default MiPrimeraApp;