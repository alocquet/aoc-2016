import { Range } from './model';
import { Day } from '../day';

export abstract class Day20 extends Day<number> {

    constructor() { super('assets/day-20.txt'); }

    parse(input: string): Range[] {
        return input.split(/\r?\n/).map(line => {
            let minmax = line.split('-').map(elt => parseInt(elt));
            return new Range(minmax[0], minmax[1]);
        });
    }

}