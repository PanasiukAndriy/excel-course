import {ExcelComponent} from '../../core/ExcelComponent';
import {createTable} from './table.template';
import {$} from '../../core/dom'
import { resizeHandler } from './table.resize';
import { isCell, shouldResize } from './table.functions';
import { TableSelection } from './TableSelection';
import { range } from '../../core/utils';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root){
    super($root, {
      listeners: ['mousedown']
    })
  }

  toHTML() {
    return createTable();
  }

  prepare(){
    this.selection = new TableSelection();
  }

  init(){
    super.init()
    
    const $cell = this.$root.find('[data-id="0:0"]');
    this.selection.select($cell);
  }

  onMousedown(event){
    if(shouldResize(event)){
      resizeHandler(this.$root, event )      
    } else if(isCell(event)){
      const $target = $(event.target);
      if(event.shiftKey){
        const target = $target.id(true);
        const current = this.selection.current.id(true);
        const cols = range(current.col, target.col);
        const rows = range(current.row, target.row);

        

        const ids = cols.reduce((acc, col) => {
          rows.forEach(row => acc.push(`${row}:${col}`)); return acc}, []);
          console.log(ids);

        const $cells = ids.map(id => this.$root.find(`[data-id="${id}"]`));
        this.selection.selectGroup($cells);

      } else {
        this.selection.select($target); 
      }      
    }
  }  
}


