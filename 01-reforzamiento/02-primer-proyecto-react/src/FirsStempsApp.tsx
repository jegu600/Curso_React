import { ItemCounterr } from "./shopping-cart/ItemCounterr"

interface InsertarItemCarr {
    id: number,
    nombreProducto: string,
    cantidad: number,
}

const insertarItemCarr: InsertarItemCarr[] = [
    { id: 1, nombreProducto: 'Ninintendo Swtic', cantidad: 7 },
    { id: 2, nombreProducto: 'Cama', cantidad: 7 },
    { id: 3, nombreProducto: 'Silla', cantidad: 7 },
    { id: 4, nombreProducto: 'Televisor', cantidad: 7 },
    { id: 5, nombreProducto: 'Televisor', cantidad: 7 },
    { id: 6, nombreProducto: 'Televisor', cantidad: 7 },
    { id: 7, nombreProducto: 'Audifonos', cantidad: 7 },
]


export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de Compras</h1>

            {
                insertarItemCarr.map(({ id, nombreProducto, cantidad }) => (
                    <ItemCounterr key={id} nombreProducto={nombreProducto} cantidad={cantidad} />
                )

                )
            }


        </>
    )
}