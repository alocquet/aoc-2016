import * as Day12Model from './../day-12/model';

export class OperationFactory {
    static parse(instruction: string): Day12Model.Operation {
        let result = Day12Model.OperationFactory.parse(instruction);
        if (!result) {
            let matcher = /(\w+)\s([-\w\d]+)\s?([-\w\d]+)?\s?(.*)/.exec(instruction);
            let operator = matcher[1];
            if (operator === 'tgl') {
                result = new Tgl(matcher[2]);
            } else if (operator === 'mul') {
                result = new Mul(matcher[2], matcher[3], matcher[4]);
            }
        }
        return result;
    }
}

export class Tgl implements Day12Model.Operation {
    constructor(public idx: string) { }

    execute(registers: Day12Model.Registers) {
        let move = registers[this.idx] !== undefined ? registers[this.idx] : this.idx;
        registers.operations[registers.idx + move] = this.toggle(registers.operations[registers.idx + move]);
    }

    toggle(operation: Day12Model.Operation) {
        if (operation instanceof Day12Model.Cpy) {
            return new Day12Model.Jnz(operation.value, operation.target);
        } else if (operation instanceof Day12Model.Inc) {
            return new Day12Model.Dec(operation.target);
        } else if (operation instanceof Day12Model.Dec) {
            return new Day12Model.Inc(operation.target);
        } else if (operation instanceof Day12Model.Jnz) {
            return new Day12Model.Cpy(operation.test, operation.factor);
        } else if (operation instanceof Tgl) {
            return new Day12Model.Inc(operation.idx);
        }
    }
}
export class Mul implements Day12Model.Operation {
    constructor(public target: string, public a: string, public b: string) { }

    execute(registers: Day12Model.Registers) {
        registers[this.target] = registers[this.a] * registers[this.b];
    }
}