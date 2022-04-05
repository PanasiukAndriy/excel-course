import {Excel} from '@/components/excel/Excel';
import {Formula} from './components/formula/Formula';
import {Header} from './components/header/Header';
import {Table} from './components/table/Table';
import {Toolbar} from './components/toolbar/Toolbar';
import {createStore} from './core/createStore';
import {rootReducer} from './redux/rootReducer';

import './module';
import './scss/index.scss';


const store = createStore(rootReducer, {
  tableTitle: 'My table excel'
});

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table], store});
excel.render();
