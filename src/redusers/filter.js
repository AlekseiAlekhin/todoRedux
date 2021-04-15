export const filters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_TODO: 'SHOW_TODO'
}


function filter(initialState = filters.SHOW_ALL, action){
    switch(action.type){
        case('SHOW_ALL'):
            return filters.SHOW_ALL;
        case('SHOW_COMPLETED'):
            return filters.SHOW_COMPLETED;
        case('SHOW_TODO'):
            return filters.SHOW_TODO;
        default:
            return initialState;
    }
}

export default filter;