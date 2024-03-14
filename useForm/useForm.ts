import { useState } from "react";
import { Form } from "../types/types";

export const useForm = <T extends Form>(initialForm: T ) => {
    const [formState, setFormState] = useState<T>( initialForm );

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
        const { name, value } = event.target;

        setFormState(( prevFormState ) => ({
            ...prevFormState,
            [name]: value
        }))
    }
    
    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
