import { CHANGE_TEXT, TABLE_RESIZE } from "./types";

export function rootReducer(state, action){
    let prevState;
    let field;
    console.log('Action reducer', action);
    switch(action.type){
        case(TABLE_RESIZE):
            field = action.data.type === 'col' ? 'colState' : 'rowState';
            prevState = state[field] || {};
            prevState[action.data.id] = action.data.value;
            //нізя мутувати старий стейт, потрібно повертати новий стейт тому ... оператор 
            return {...state, [field]: prevState} //потрібно ід колонки, value, 

        case(CHANGE_TEXT):
            prevState = state['dataState'] || {};
            prevState[action.data.id] = action.data.value;
            return {...state, currentText: action.data.value, dataState: prevState}

    default: return state;
    }
}