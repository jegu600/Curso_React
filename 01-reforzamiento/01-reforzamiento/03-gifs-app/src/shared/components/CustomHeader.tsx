interface Props {
    titulo: string,
    descripcion?: string,
}

export const CustomHeader = ({ titulo, descripcion }: Props) => {
    return (
        <>
            <div className="content-center">
                <h1>{titulo}</h1>
                {descripcion ? <p>{descripcion}</p> : null}
            </div>
        </>


    )
}
