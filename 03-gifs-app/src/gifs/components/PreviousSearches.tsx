interface Props {
    searchs: string[],
    onLabelClick: (res: string) => void,
}

export const PreviousSearches = ({ searchs, onLabelClick }: Props) => {
    return (
        <div className="previous-searches" >
            <h2>Busquedas previas</h2>
            <ul className="previous-searches-list">
                {
                    searchs.map((res) => (
                        <li
                            key={res}
                            onClick={() => onLabelClick(res)}
                        >

                            {res}

                        </li>
                    ))
                }
            </ul>
        </div >
    )
}
