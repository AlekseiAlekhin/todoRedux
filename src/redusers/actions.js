
export const addToDo = (text)=>({
    type: 'ADD_TO_DO',
    textContent: text,
})

export const checkedCheckbox = (id)=>({
    type: 'CHECKED_CHECKBOX',
    payload: id,
})

export const dltButton = (id)=>({
    type: 'DELETE_BUTTON',
    some: id
})