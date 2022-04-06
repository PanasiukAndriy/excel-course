export function rootReducer(state, action){
    switch(action.type){
        case('TABLE_RESIZE'):
            //нізя мутувати старий стейт, потрібно повертати новий стейт тому ... оператор 
            return {...state, colState: {}} //потрібно ід колонки, value, 

    default: return state;
    }
}