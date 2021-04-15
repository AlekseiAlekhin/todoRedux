import {v4 as uuidv4} from 'uuid';




function changingToDoList(state = [], action) {
    switch (action.type) {
        case ('ADD_TO_DO'):
            return [...state, {key: uuidv4(), text: action.textContent, isChecked: false}];
        case('CHECKED_CHECKBOX'):
            console.log(action)
            return state.map(function (item) {
                if (item.key === action.payload) {
                    item.isChecked = !item.isChecked
                }
                return item;
            })
        case('DELETE_BUTTON'):
            state.splice(state.findIndex(item => item.key === action.some.id), 1)
            return [...state];
        case('ALL_CHECKED'):
            return state.map(function (item){
                item.isChecked = true;
                return item;
            })
        case('DELETE_ALL_CHECKED'):
            return state.filter(function (item){
                return !item.isChecked;
            })
        default:
            return state;
    }
}

export default changingToDoList;