import {$} from '../dom'
import { ActiveRoute } from './ActiveRoute';

export class Roter{
    constructor(selector, routes){
        if(!selector){
            throw new Error('Router: selector is recuired!')
        }
        this.$placeholder = $(selector);
        this.routes = routes;

        this.changePageHandler = this.changePageHandler.bind(this)
        this.init();

    }

    init(){
        window.addEventListener('hashchange', this.changePageHandler);
        this.changePageHandler();
    }

    changePageHandler(event){
        console.log(ActiveRoute.path);
        console.log(ActiveRoute.param);

        this.$placeholder.html(ActiveRoute.path);
    } 

    destroy(){
        window.removeEventListener('hashchange', this.changePageHandler);        
    }
}