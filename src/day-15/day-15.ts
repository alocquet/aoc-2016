import { Disc } from './model';
import { Day } from '../day';

export class Day15 extends Day<number> {

    constructor() { super('assets/day-15.txt'); }

    execute(input: string): number {
        let discs = this.parse(input);
        for (let time = 0; ; time++) {
            let found = true;
            for (let disc of discs) {
                if ((time + disc.position + disc.id) % disc.positions !== 0) {
                    found = false;
                    break;
                }
            }
            if (found) { return time; }
        }
    }

    parse(input: string): Disc[] {
        let pattern = /Disc #(\d+) has (\d+) positions; at time=0, it is at position (\d+)./;
        return input.split(/\r?\n/).map(line => {
            let match = pattern.exec(line);
            return new Disc(parseInt(match[1]), parseInt(match[2]), parseInt(match[3]));
        });
    }
}
