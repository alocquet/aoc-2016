import { Cpy, Jnz, Inc, Dec } from './../model';
import { Day12 } from '../day-12';

export class Day12Step1 extends Day12 {
    execute(input: string): number {
        return this.compute(input, { 'a': 0, 'b': 0, 'c': 0, 'd': 0 });
    }
}