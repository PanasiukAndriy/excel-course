import {$} from '../dom';
import { ActiveRoute } from './ActiveRoute';

export class Router{
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
        // console.log(ActiveRoute.path);
        // console.log(ActiveRoute.param);

        const Page = this.routes.excel;
        const page = new Page();
        this.$placeholder.append(page.getRoot());

        page.afterRender();
    } 

    destroy(){
        window.removeEventListener('hashchange', this.changePageHandler);        
    }
}