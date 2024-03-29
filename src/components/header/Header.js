import { defaultTitle } from '../../constants';
import {ExcelComponent} from '../../core/ExcelComponent';
import { changeTitle } from '../../redux/actions';
import {$} from '../../core/dom' 
import { ActiveRoute } from '../../core/routes/ActiveRoute';

export class Header extends ExcelComponent {
  static className = 'excel__header';

  constructor($root, options){
    super($root, {
      name: 'Header',
      listeners: ['input', 'click'],
      ...options
    })
  }

  toHTML() {
    const title = this.store.getState().title || defaultTitle;
    return `
    <input type="text" class="input" value="${title}" />

          <div>
            <div class="button" data-button="remove">
              <i class="material-icons" data-button="remove">delete</i>
            </div>

            <div class="button" data-button="exit">
              <i class="material-icons" data-button="exit">exit_to_app</i>
            </div>
          </div>
    `;
  }

  onClick(event){
    const $target = $(event.target)

    if($target.data.button === 'remove'){
      const decision = confirm('are you sure want to delete?');
      if(decision){
        localStorage.removeItem('excel' + ActiveRoute.param);
        ActiveRoute.navidate(''); 
      }
    } else if($target.data.button === 'exit'){
      ActiveRoute.navidate('');
    }

  }

  onInput(event){
    const $target =  $(event.target)
    this.$dispatch(changeTitle($target.text()))

  }
}
