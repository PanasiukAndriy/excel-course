export function createStore(rootReducer, initialState = {}){
    //щоб не було мутацій, то склонувати... хз to do
    let state = rootReducer(initialState, {type: '__INIT__'});
    let listeners =[];

    return {
        subscribe(fn){
            listeners.push(fn);
            //ver 1
            //return () => {listeners.filter(l => l !== fn)}
            //ver 2
            return {
                unsubscribe(){
                    listeners = listeners.filter(l => (l !== fn));
                }
            }

        },
        dispatch(action){
            state = rootReducer(state, action);
            listeners.forEach(l => l(state));
        },
        getState(){
            return state; 
        }
    }
}