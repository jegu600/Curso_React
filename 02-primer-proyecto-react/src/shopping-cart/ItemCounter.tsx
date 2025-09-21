import { useState } from "react";

import './ItemCounter.css'

interface Props {
    nombreProducto: string,
    cantidad: number | undefined,
}

export const ItemCounter = ({ nombreProducto, cantidad = 1 }: Props) => {

    const [contador, actulizaContador] = useState(cantidad);

    const hacerClick = () => {
        console.log(`Click en  ${name} `)
    };

    const sumarConClick = () => {
        actulizaContador(contador + 1);
    };

    const restarConClick = () => {
        if (contador === 0) return;
        actulizaContador(contador - 1);
    };

    return (
        <>
            <section className="mySection">

                <span
                    className="mySpan"
                    style={{ color: contador <= 1 ? 'red' : 'black' }}
                >

                    {nombreProducto}
                </span>

                <button
                    className="myButton"
                    onClick={sumarConClick}
                >
                    + 1
                </button>


                <button
                    className="myButton"
                    onClick={hacerClick}
                >
                    {contador}
                </button>


                <button
                    className="myButton"
                    onClick={restarConClick}
                >
                    - 1 +-
                </button>
                <p>HLA MUNDO</p>
            </section>
        </>
    );
}
