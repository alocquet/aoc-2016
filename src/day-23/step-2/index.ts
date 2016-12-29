import { Registers } from './../../day-12/model';
import { Day23 } from '../day-23';

export class Day23Step2 extends Day23 {
    execute(input: string): number {
        return this.compute(input, new Registers(12, 0, 0, 0));
    }
}