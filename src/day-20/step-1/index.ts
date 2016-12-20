import { Range } from '../model';
import { Day20 } from '../day-20';

export class Day20Step1 extends Day20 {

    execute(input: string): number {
        let ranges = this.parse(input).sort(Range.compare);
        let idx = 0;
        let isOk = false;
        while (!isOk) {
            isOk = true;
            for (let range of ranges) {
                if (range.min <= idx && idx <= range.max) {
                    idx = range.max + 1;
                    isOk = false;
                    break;
                }
            }
        }
        return idx;
    }
}