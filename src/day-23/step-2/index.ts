import { Day23 } from '../day-23';

export class Day23Step2 extends Day23 {
    execute(input: string): number {
        return this.compute(input, { 'a': 12, 'b': 0, 'c': 0, 'd': 0 });
    }
}