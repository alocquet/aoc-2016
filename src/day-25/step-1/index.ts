import { Day25 } from '../day-25';

export class Day25Step1 extends Day25 {
    execute(input: string): number {
        let idx = 0;
        while (!this.compute(input, { 'a': idx, 'b': 0, 'c': 0, 'd': 0 })) {
            idx++;
        }
        return idx;
    }
}