import { Cpy, Jnz, Inc, Dec, Registers } from './../model';
import { Day12 } from '../day-12';

export class Day12Step2 extends Day12 {
    execute(input: string): number {
        return this.compute(input, new Registers(0, 0, 1, 0));
    }
}