export class Emitter{
    constructor(){
        this.listerers = {}
    }

    //event - string name for example formula:done 
    emit(event, ...args){
        if(!Array.isArray(this.listerers[event])){
            return false;
        } else {
            this.listerers[event].forEach(listener => listener(...args));
        }
        return true;
    }

    subscribe(event, fn){
        this.listerers[event] = this.listerers[event] || [];
        this.listerers[event].push(fn); 
        return () => {
            this.listerers[event] = this.listerers[event].filter(listener => listener !== fn);
        }
    }
}