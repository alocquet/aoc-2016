import { Day } from '../day';
import { Ip } from './model';

export abstract class Day7 extends Day<number> {

    constructor() { super('assets/day-07.txt'); }

    parse(input: string): Ip[] {
        let patternOut = /([a-z]+\[|\][a-z]+)/g;
        let patternIn = /\[[a-z]+\]/g;
        return input.split(/\r?\n/).map(line => {
            let res = new Ip();
            res.hypernet = line.match(patternIn).map(elt => elt.replace(/[\[\]]/g, ''));
            res.supernet = line.match(patternOut).map(elt => elt.replace(/[\[\]]/g, ''));
            return res;
        });
    }
}