export interface Model {
  x: number;
  y: number;
  value?: number;
  id: string;
}

export interface Container {
  inner: Model[];
}

export function buildDataStructs() {

  const outer = [];
  for(let i=0;i<9;i++) {
    const inner = [];
    for(let j=1;j<10;j++) {
      if((i+j) < 10) {
        inner.push(i+j);
      } else {
        console.log({i, j});
        console.table({ inner });
        inner.push((j) - (j-1));
      }
      
    }
    outer.push(inner);
  }

  
  
}

export function buildGrid() {

  const container = document.getElementById('container');
  
  for(let i=0;i<3;i++) {
    const row = document.createElement('div');
    row.setAttribute('class', 'flex');
    for(let j=0;j<3;j++) {
      const column = document.createElement('div');
      column.setAttribute('class', 'column');
      column.setAttribute('id', j.toString());
      const table = document.createElement('table');
      for(let a=1;a<4;a++) {
        const tr = document.createElement('tr');
        for(let b=1;b<4;b++) {
          const td = document.createElement('td');
          td.textContent = (a+b).toString();
          tr.appendChild(td);
        }
        table.appendChild(tr);
      }
      column.appendChild(table);
      row.appendChild(column);
    }
    container.appendChild(row);
  }

  
  
}

buildDataStructs();

// document.body.textContent = buildDataStructs().toString();
