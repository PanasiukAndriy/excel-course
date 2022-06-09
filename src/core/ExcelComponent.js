import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.subscribe = options.subscribe || [];
    this.store = options.store;
    this.unsubscribers = [];

    console.log(options)
    this.prepare();
  }

  prepare(){
    //method runs before init
  }

  //return component template
  toHTML() {
    return '';
  }

  $emit(event, ...args){
    this.emitter.emit(event, ...args);
  }

  $on(event, fn){
    const unsub = this.emitter.subscribe(event, fn);
    this.unsubscribers.push(unsub);
  }

  $dispatch(action){
    this.store.dispatch(action);
  }

  // сюди прийдуть зміни по полях на які ми підписалися
  storeChanged(){
  }

  isWatching(key){
    return this.subscribe.includes(key);
  }

  init() {
    this.initDOMListeners();
  }

  destroy() {
    this.removeDOMListeners();
    this.unsubscribers.forEach(unsub => unsub());
  }
}
