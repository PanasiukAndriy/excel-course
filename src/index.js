import {Excel} from '@/components/excel/Excel';
import {Formula} from './components/formula/Formula';
import {Header} from './components/header/Header';
import {Table} from './components/table/Table';
import {Toolbar} from './components/toolbar/Toolbar';
import {createStore} from './core/createStore';
import {rootReducer} from './redux/rootReducer';

import './module';
import './scss/index.scss';
import { storage, debounce } from './core/utils';
import { initialState } from './redux/initialState';


const store = createStore(rootReducer, initialState);

const stateListener = debounce(state => {
  console.log(' app state', state);
  storage('excel-state', state);
}, 300);

store.subscribe(stateListener);


const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table], store});
excel.render();
