interface Todo {
    id: number;
    todo: string;
    done: boolean
}

interface TodoAction {
    type: string;
    payload: Todo;
}

export const todoReducer = ( initialState: Todo[], action: TodoAction ): Todo[] => {
    switch ( action.type ) {
        case '[TODO] Add Todo':
            if( action.payload ){
                return [ ...initialState, action.payload ];
            } else {
                return initialState;
            }
        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload.id )
        case '[TODO] Toggle Todo':
            return initialState.map( todo => {
                if( todo.id === action.payload.id ){
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            })
            
        default: 
            return initialState;
    }
}