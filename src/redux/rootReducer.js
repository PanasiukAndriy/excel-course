import { CHANGE_TEXT, CHANGE_STYLES, TABLE_RESIZE } from "./types";

export function rootReducer(state, action){
    let field;
    //console.log('Action reducer', action);
    switch(action.type){
        case(TABLE_RESIZE):
            field = action.data.type === 'col' ? 'colState' : 'rowState';
            //нізя мутувати старий стейт, потрібно повертати новий стейт тому ... оператор 
            return {...state, [field]: value(state, field. action)} //потрібно ід колонки, value, 

        case(CHANGE_TEXT):
            field = 'dataState';            
            return {...state, currentText: action.data.value, [field]: value(state, field. action)}

        case(CHANGE_STYLES):
        return {...state, currentStyles: action.data }

    default: return state;
    }
}

function value(state, field, action){
    const val = state[field] || {};
    val[action.data.id] = action.data.value;
    return val;
}

