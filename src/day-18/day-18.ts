import { } from './model';

export class Day18 {

    execute(input: string, numRows: number): number {
        return this.computeXRows(this.parse(input), numRows)
            .reduce((sum, row) =>
                sum + row.reduce((rowSum, cell) =>
                    rowSum + (cell ? 0 : 1), 0), 0);
    }

    computeXRows(start: boolean[], count: number): boolean[][] {
        let res = [start];
        for (let idx = 0; idx < count - 1; idx++) {
            res.push(this.computeNextRow(res[idx]));
        }
        return res;
    }

    computeNextRow(row: boolean[]): boolean[] {
        let res = [];
        for (let idx = 0; idx < row.length; idx++) {
            let l = idx > 0 ? row[idx - 1] : false;
            let c = row[idx];
            let r = idx < row.length - 1 ? row[idx + 1] : false;
            res.push(this.isTrap(l, c, r));
        }
        return res;
    }

    /**
     * true if is a trap.
     */
    isTrap(l: boolean, c: boolean, r: boolean): boolean {
        return l && c && !r || !l && c && r || l && !c && !r || !l && !c && r;
    }

    parse(input: string): boolean[] {
        return input.split('').map(char => char === '^');
    }

    toString(row: boolean[]): string {
        return row.map(cell => cell ? '^' : '.').join('');
    }
}