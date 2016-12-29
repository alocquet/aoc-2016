import { Registers } from './../../day-12/model';
import { Day25 } from '../day-25';

export class Day25Step1 extends Day25 {
    execute(input: string): number {
        let idx = 0;
        while (!this.compute(input, new Registers(idx, 0, 0, 0))) {
            idx++;
        }
        return idx;
    }
}