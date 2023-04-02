"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sudoku = void 0;
class Sudoku {
    shiftPush(source, shiftCount) {
        const copy = JSON.parse(JSON.stringify(source));
        for (let i = 0; i < shiftCount; i++) {
            let shift;
            if (Boolean(copy)) {
                shift = copy.shift() ?? 0;
                copy.push(shift);
            }
        }
        return copy;
    }
    generator() {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let i = 0; i < arr.length; i++) {
            const r = i + Math.floor(Math.random() * arr.length - i);
            const tmp = arr[i];
            arr[i] = arr[r];
            arr[r] = tmp;
        }
        console.table(arr);
        return arr;
    }
    buildDataStructs(index) {
        let source = this.generator();
        const array = [];
        // array[0] = firstRow;
        const inner = new Set();
        for (let i = 0; i < 9; i++) {
            switch (i / 3) {
                case 0: {
                    array.push(source);
                    break;
                }
                case 1: {
                    const copy = this.shiftPush(source, 1);
                    array[i] = (copy);
                    break;
                }
                case 2: {
                    const copy = this.shiftPush(source, 2);
                    array[i] = (copy);
                }
            }
            const copy1 = this.shiftPush(source, 3);
            const copy2 = this.shiftPush(copy1, 3);
            if (i === 1) {
                array.push(copy2);
            }
            else if (i === 2) {
                array.push(copy1);
            }
            const copy3 = this.shiftPush(source, 1);
            const copy4 = this.shiftPush(copy3, 3);
            const copy5 = this.shiftPush(copy4, 3);
            if (i === 4) {
                array.push(copy5);
            }
            else if (i === 5) {
                array.push(copy4);
            }
            const copy6 = this.shiftPush(source, 2);
            const copy7 = this.shiftPush(copy6, 3);
            const copy8 = this.shiftPush(copy7, 3);
            if (i === 7) {
                array.push(copy8);
            }
            else if (i === 8) {
                array.push(copy7);
            }
        }
        // console.table(array);
        this.buildGrid(index, array);
    }
    buildGrid(index, array) {
        const container = document.querySelector('.flex');
        const grid = document.createElement('div');
        grid.setAttribute('class', 'grid');
        grid.setAttribute('id', `grid-${index}`);
        const heading = document.createElement('h2');
        heading.innerText = `${index}`;
        grid.appendChild(heading);
        const table = document.createElement('table');
        const tb = document.createElement('tbody');
        table.appendChild(tb);
        array.forEach((row, r) => {
            const tr = document.createElement('tr');
            row.forEach((col, c) => {
                const td = document.createElement('td');
                td.innerText = col.toString();
                tr.appendChild(td);
            });
            tb?.appendChild(tr);
        });
        grid?.appendChild(table);
        container?.appendChild(grid);
    }
}
exports.Sudoku = Sudoku;
// Usage
for (let i = 1; i < 10001; i++) {
    const sudoku = new Sudoku();
    sudoku.buildDataStructs(i);
}
