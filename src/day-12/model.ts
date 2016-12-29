export class Registers {
    constructor(public a: number, public b: number, public c: number, public d: number, public idx = 0, public operations: Operation[] = []) { }
}

export interface Operation {
    execute(registers: Registers);
}

export class OperationFactory {
    static parse(instruction: string): Operation {
        let matcher = /(\w+)\s([-\w\d]+)\s?([-\w\d]+)?\s?(.*)/.exec(instruction);
        let operator = matcher[1];
        if (operator === 'cpy') {
            return new Cpy(matcher[2], matcher[3]);
        } else if (operator === 'inc') {
            return new Inc(matcher[2]);
        } else if (operator === 'dec') {
            return new Dec(matcher[2]);
        } else if (operator === 'jnz') {
            return new Jnz(matcher[2], matcher[3]);
        }
    }
}

export class Cpy implements Operation {
    constructor(public value: string, public target: string) { }

    execute(registers: Registers) {
        if (registers[this.target] !== undefined) {
            if (registers[this.value] !== undefined) {
                registers[this.target] = registers[this.value];
            } else {
                registers[this.target] = parseInt(this.value);
            }
        }
    }
}

export class Inc implements Operation {
    constructor(public target: string) { }

    execute(registers: Registers) {
        if (registers[this.target] !== undefined) {
            registers[this.target]++;
        }
    }
}

export class Dec implements Operation {
    constructor(public target: string) { }

    execute(registers: Registers) {
        if (registers[this.target] !== undefined) {
            registers[this.target]--;
        }
    }
}

export class Jnz implements Operation {
    constructor(public test: string, public factor: string) { }

    execute(registers: Registers) {
        let test = registers[this.test] !== undefined ? registers[this.test] : parseInt(this.test);
        if (test !== 0) {
            let factor = registers[this.factor] !== undefined ? registers[this.factor] : parseInt(this.factor);
            registers.idx += factor - 1;
        }
    }
}
