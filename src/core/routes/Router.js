import {$} from '../dom';
import { ActiveRoute } from './ActiveRoute';

export class Router{
    constructor(selector, routes){
        if(!selector){
            throw new Error('Router: selector is recuired!')
        }
        this.$placeholder = $(selector);
        this.routes = routes;

        this.page = null;

        this.changePageHandler = this.changePageHandler.bind(this)
        this.init();

    }

    init(){
        window.addEventListener('hashchange', this.changePageHandler);
        this.changePageHandler();
    }

    changePageHandler(event){
        if(this.page){
            this.page.destroy();
        }
        
        this.$placeholder.clear();
        // console.log(ActiveRoute.path);
        // console.log(ActiveRoute.param);

        const Page = ActiveRoute.path.includes('excel') ? this.routes.excel : this.routes.dashboard;

        const page = new Page(ActiveRoute.param);
        

        this.$placeholder.append(page.getRoot());
        
        page.afterRender();
    } 

    destroy(){
        window.removeEventListener('hashchange', this.changePageHandler);        
    }
}