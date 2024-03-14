import { useState } from "react"

export const useCounter = ( initialValue: number = 10 ) => {
    const [counter, setCounter] = useState<number>( initialValue )
    
    const increment = ( value:number = 1 ):void => {
        setCounter( ( current ) => current + value );
    }

    const decrement = ( value:number = 2 ):void => {
        setCounter( ( current ) => {
            if( value <= 0 ) return current;

            const newValue = current - value;
            return newValue > 0 ? newValue : 0;
        });
    }

    const reset = ():void => setCounter( initialValue );

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
