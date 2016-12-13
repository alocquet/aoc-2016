import { Day } from '../day';
import { Operation, Cpy, Inc, Dec, Jnz } from './model';

export abstract class Day12 extends Day<number> {

    constructor() { super('assets/day-12.txt'); }

    compute(input: string, registers): number {
        let operations = this.parse(input);
        for (let idx = 0; idx < operations.length; idx++) {
            let operation = operations[idx];
            if (operation instanceof Cpy) {
                if (registers[operation.value]) {
                    registers[operation.target] = registers[operation.value];
                } else {
                    registers[operation.target] = parseInt(operation.value);
                }
            } else if (operation instanceof Jnz) {
                let test = registers[operation.test] !== undefined ? registers[operation.test] : parseInt(operation.test);
                if (test !== 0) {
                    idx = idx + parseInt(operation.factor) - 1;
                }
            } else if (operation instanceof Inc) {
                registers[operation.target]++;
            } else if (operation instanceof Dec) {
                registers[operation.target]--;
            }
        }
        return registers.a;
    }

    parse(input: string): Operation[] {
        let registers = { 'a': 0, 'b': 0, 'c': 0, 'd': 0 };
        return input.split(/\r?\n/).map(line => {
            let matcher = /(\w+)\s([\w\d]+)\s?(.*)/.exec(line);
            let operator = matcher[1];
            if (operator === 'cpy') {
                return new Cpy(matcher[2], matcher[3]);
            } else if (operator === 'inc') {
                return new Inc(matcher[2]);
            } else if (operator === 'dec') {
                return new Dec(matcher[2]);
            } else {
                return new Jnz(matcher[2], matcher[3]);
            }
        });
    }
}