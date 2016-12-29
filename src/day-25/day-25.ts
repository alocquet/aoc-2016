import { Day } from '../day';
import { OperationFactory, Out } from './model';
import { Operation } from './../day-12/model';

export abstract class Day25 extends Day<number> {

    compute(input: string, registers): boolean {

        registers.operations = this.parse(input);
        for (; registers.idx < registers.operations.length; registers.idx++) {
            if (registers.operations[registers.idx]) {
                let result = registers.operations[registers.idx].execute(registers);
                if (result !== undefined) {
                    return result;
                }
            }
        }
        return true;
    }

    parse(input: string): Operation[] {
        return input.split(/\r?\n/).map(OperationFactory.parse);
    }
}