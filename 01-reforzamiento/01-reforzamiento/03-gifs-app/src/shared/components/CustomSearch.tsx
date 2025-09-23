interface Props {
    ClassNameProp?: string,
    typeProp: string,
    placeHolderProp?: string,
    nameButtonProp: string,
}

export const CustomSearch = ({ ClassNameProp, typeProp, placeHolderProp = 'buscar', nameButtonProp }: Props) => {
    return (

        <div className={ClassNameProp} >
            <input type={typeProp} placeholder={placeHolderProp} />
            <button>{nameButtonProp}</button>
        </div >

    )
}
