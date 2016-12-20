import { Range } from '../model';
import { Day20 } from '../day-20';

export class Day20Step2 extends Day20 {

    constructor(private maxIp: number) { super(); }

    execute(input: string): number {
        let ranges = this.parse(input).sort(Range.compare);
        let count = 0;
        let cursor = 0;

        while (ranges.length > 0) {
            let range = ranges.shift();
            let min = range.min;
            if (cursor < min) {
                count += min - cursor;
            }

            let max = range.max;
            while (ranges.length > 0 && ranges[0].min <= max) {
                let intersect = ranges.shift();
                max = Math.max(max, intersect.max);
            }
            cursor = max + 1;
        }
        count += this.maxIp + 1 - cursor;
        return count;
    }
}