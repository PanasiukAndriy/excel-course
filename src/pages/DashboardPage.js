import { $ } from "../core/dom";
import { Page } from "../core/Page";

export class DashboardPage extends Page{
    getRoot(){
        return $.create('div', 'db').html(`
        <div class="db__header">
          <h1>Excel Dashboard</h1>
        </div>
        <div class="db__new">
          <div class="db__view">
            <a href="#" class="db__create"> new table </a>
          </div>
        </div>

        <div class="db__table db__view">
          <div class="db__list-header">
            <span>name</span>
            <span>date</span>
          </div>

          <ul class="db__list">
            <li class="db__record">
              <a href="#">doc1</a>
              <strong>12.12.2020</strong>
            </li>

            <li class="db__record">
              <a href="#">doc2</a>
              <strong>12.12.2020</strong>
            </li>

            <li class="db__record">
              <a href="#">doc3</a>
              <strong>12.12.2020</strong>
            </li>
          </ul>
        </div>`)        
    }
} 