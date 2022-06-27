export class Page{
    constructor(params){
        this.params = params;

    }

    getRoot(){
        throw new Error("method getRoot not implemented")
    }

    afterRender(){}

    destroy(){}
}