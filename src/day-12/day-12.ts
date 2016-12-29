import { Day } from '../day';
import { Operation, Cpy, Inc, Dec, Jnz, Registers, OperationFactory } from './model';

export abstract class Day12 extends Day<number> {

    compute(input: string, registers: Registers): number {
        registers.operations = this.parse(input);
        for (; registers.idx < registers.operations.length; registers.idx++) {
            if (registers.operations[registers.idx]) {
                registers.operations[registers.idx].execute(registers);
            }
        }
        return registers.a;
    }

    parse(input: string): Operation[] {
        return input.split(/\r?\n/).map(OperationFactory.parse);
    }
}