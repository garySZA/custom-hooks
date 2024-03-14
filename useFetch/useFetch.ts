import { useEffect, useState } from "react";
import { PokemonData } from "../types/types";

export const useFetch = ( url:string ) => {
    const [state, setState] = useState<PokemonData>({
        data: null,
        isLoading: true,
        hasError: false,
        error: {}
    });
    
    useEffect(() => {
        
        getFetch();

    }, [ url ]);

    const setLoadingState = ():void => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: {}
        })
    }

    const getFetch = async () => {
        setLoadingState();

        const response = await fetch( url );

        if( !response.ok ){
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: response.status,
                    message: response.statusText
                }
            });

            return;
        }

        const data = await response.json();
        setState({
            data,
            isLoading: false,
            hasError: false,
            error: {}
        })

        
    }
    

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}
