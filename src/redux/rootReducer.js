export function rootReducer(state, action){
    let prevState;
    switch(action.type){
        case('TABLE_RESIZE'):
            prevState = state.colState || {};
            prevState[action.data.id] = action.data.value;
            //нізя мутувати старий стейт, потрібно повертати новий стейт тому ... оператор 
            return {...state, colState: prevState} //потрібно ід колонки, value, 

    default: return state;
    }
}