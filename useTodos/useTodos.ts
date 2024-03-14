import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

interface Todo {
    id: number;
    todo: string;
    done: boolean
}

const initialState: Todo[] = [
    // {
    //     id: new Date().getTime(),
    //     todo: 'Recolectar la piedra del alma',
    //     done: false
    // },
];

const init = () => {
    const storedData = localStorage.getItem('todos');

    if( storedData !== null ){
        return JSON.parse( storedData );
    }

    return [];
}

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem( 'todos', JSON.stringify( todos ) );

    }, [todos]);
    
    const handleNewTodo = ( todo: Todo ):void => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );
    }

    const handleRemoveTodo = ( todo: Todo ):void => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: todo
        });
    }

    const handleToggleTodo = ( todo: Todo ): void => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: todo
        });
    }

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done ).length,
        handleToggleTodo,
        handleRemoveTodo,
        handleNewTodo,
    }
}
