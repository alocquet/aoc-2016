import * as Day12Model from './../day-12/model';
import * as Day23Model from './../day-23/model';

export class OperationFactory {
    static parse(instruction: string): Day12Model.Operation {
        let result = Day23Model.OperationFactory.parse(instruction);
        if (!result) {
            let matcher = /(\w+)\s([-\w\d]+)\s?([-\w\d]+)?\s?(.*)/.exec(instruction);
            let operator = matcher[1];
            if (operator === 'out') {
                return new Out(matcher[2]);
            }
        }
        return result;
    }
}

export class Out implements Day12Model.Operation {
    count = 0;
    output: number;
    constructor(public register: string) { }

    execute(registers: Day12Model.Registers): boolean {
        if (this.output === registers[this.register]) {
            return false;
        } else if (this.count++ < 10) {
            this.output = registers[this.register];
        } else {
            return true;
        }
    }
}
