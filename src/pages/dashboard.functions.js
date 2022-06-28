import { keys } from "regenerator-runtime";

export function toHTML(){
    return `
            <li class="db__record">
              <a href="#">doc1</a>
              <strong>12.12.2020</strong>
            </li> 
    `
}

function getAllKeys(){
  const keys = []; 
  for(let i=0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    if(!key.includes('excel')){
      continue
    }
    keys.push(key)    
  }
  return keys;
}

export function createRecordsTable(){
  const keys = getAllKeys();

  console.log(keys);

  if(!keys.length){
    return `<p>empty table </p>`  
  }
    
  return `
  <div class="db__list-header">
            <span>name</span>
            <span>date</span>
          </div>

          <ul class="db__list">
          ${keys.map(toHTML).join('')}                                 
          </ul>
  `


}