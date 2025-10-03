import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/gif-gifs-gy-query.action";

// const gitsCache: Record<string, Gif[]> = {};


export const useGifs = () => {
    const [gifs, setGifs] = useState<Gif[]>([]);
    const [previusSearchs, setSearchs] = useState<string[]>([]);

    const gitsCache = useRef<Record<string, Gif[]>>({});


    const handleResClick = async (res: string) => {
        if (gitsCache.current[res]) {
            setGifs(gitsCache.current[res]);
            return;
        }
        const gif = await getGifsByQuery(res);
        setGifs(gif);
    };

    const handleSearch = async (query: string = '') => {
        query = query.trim().toLowerCase();
        if (query.length === 0) return;
        if (previusSearchs.includes(query)) return;
        const currentSearch = previusSearchs.slice(0, 6);
        currentSearch.unshift(query);
        setSearchs(currentSearch);
        const gif = await getGifsByQuery(query);

        setGifs(gif);

        gitsCache.current[query] = gif;
        console.log(gitsCache)
    };


    return {
        gifs,
        previusSearchs,

        handleResClick,
        handleSearch,


    }
}
