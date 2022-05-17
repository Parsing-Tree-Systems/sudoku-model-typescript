"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildDataStructs = void 0;
function buildDataStructs() {
    const container = document.getElementById('container');
    for (let i = 0; i < 3; i++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'flex');
        for (let j = 0; j < 3; j++) {
            const column = document.createElement('div');
            column.setAttribute('class', 'column');
            column.setAttribute('id', j.toString());
            const table = document.createElement('table');
            for (let a = 1; a < 4; a++) {
                const tr = document.createElement('tr');
                for (let b = 1; b < 4; b++) {
                    const td = document.createElement('td');
                    td.textContent = (a + b).toString();
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
exports.buildDataStructs = buildDataStructs;
buildDataStructs();
// document.body.textContent = buildDataStructs().toString();
