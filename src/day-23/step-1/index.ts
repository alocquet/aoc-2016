import { Registers } from './../../day-12/model';
import { Day23 } from '../day-23';

export class Day23Step1 extends Day23 {
    execute(input: string): number {
        return this.compute(input, new Registers(7, 0, 0, 0));
    }
}