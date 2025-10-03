import { useState, type KeyboardEvent, useEffect } from 'react';

interface Props {
    ClassNameProp?: string,
    typeProp: string,
    placeHolderProp?: string,
    nameButtonProp: string,

    onQuery: (query: string) => void,
}

export const CustomSearch = ({ ClassNameProp, typeProp, placeHolderProp = 'buscar', nameButtonProp, onQuery }: Props) => {

    const [query, setQuery] = useState('');

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            onQuery(query);
        }, 650);

        return () => { clearTimeout(timeOutId) }

    }, [query, onQuery]
    );


    const handleSearch = () => {
        onQuery(query);
        // setQuery('');
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' || event.keyCode === 13) {
            handleSearch();
        }
    };

    return (
        <div className={ClassNameProp} >
            <input
                type={typeProp}
                placeholder={placeHolderProp}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={handleKeyDown}
            />

            <button
                onClick={handleSearch}
            >
                {nameButtonProp}
            </button>
        </div>

    )
}
