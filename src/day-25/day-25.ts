import { Day } from '../day';
import { Operation, Cpy, Inc, Dec, Jnz } from '../day-12/model';
import { Mul } from '../day-23/model';
import { Out } from './model';

export abstract class Day25 extends Day<number> {

    compute(input: string, registers): boolean {
        let output: number;
        let count = 0;
        let operations = this.parse(input);
        for (let idx = 0; idx < operations.length; idx++) {
            let operation = operations[idx];
            if (operation instanceof Cpy) {
                if (registers[operation.target] !== undefined) {
                    if (registers[operation.value] !== undefined) {
                        registers[operation.target] = registers[operation.value];
                    } else {
                        registers[operation.target] = parseInt(operation.value);
                    }
                }
            } else if (operation instanceof Jnz) {
                let test = registers[operation.test] !== undefined ? registers[operation.test] : parseInt(operation.test);
                if (test !== 0) {
                    let factor = registers[operation.factor] !== undefined ? registers[operation.factor] : parseInt(operation.factor);
                    idx = idx + factor - 1;
                }
            } else if (operation instanceof Inc) {
                if (registers[operation.target] !== undefined) {
                    registers[operation.target]++;
                }
            } else if (operation instanceof Dec) {
                if (registers[operation.target] !== undefined) {
                    registers[operation.target]--;
                }
            } else if (operation instanceof Out) {
                if (output === registers[operation.register]) {
                    return false;
                } else if (count++ < 10) {
                    output = registers[operation.register];
                } else {
                    return true;
                }
            } else if (operation instanceof Mul) {
                registers[operation.target] += registers[operation.a] * registers[operation.b];
            }
        }
        return true;
    }

    parse(input: string): Operation[] {
        return input.split(/\r?\n/).map(line => {
            let matcher = /(\w+)\s([-\w\d]+)\s?([-\w\d]+)?\s?(.*)/.exec(line);
            let operator = matcher[1];
            if (operator === 'cpy') {
                return new Cpy(matcher[2], matcher[3]);
            } else if (operator === 'inc') {
                return new Inc(matcher[2]);
            } else if (operator === 'dec') {
                return new Dec(matcher[2]);
            } else if (operator === 'jnz') {
                return new Jnz(matcher[2], matcher[3]);
            } else if (operator === 'out') {
                return new Out(matcher[2]);
            } else if (operator === 'mul') {
                return new Mul(matcher[2], matcher[3], matcher[4]);
            } else {
                console.error(line);
            }
        });
    }
}