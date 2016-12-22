import { Node } from './model';
import { Day } from '../day';

export abstract class Day22 extends Day<number> {

    constructor() { super('assets/day-22.txt'); }

    isViable(a: Node, b: Node) {
        return a.used > 0 && a.used <= b.available;
    }

    parse(input: string): Node[] {
        return input.split(/\r?\n/).map(line => {
            let match = /\/dev\/grid\/node-x(\d+)-y(\d+)\s+(\d+)T\s+(\d+)T\s+(\d+)T\s+(\d+)%/.exec(line);
            return new Node(parseInt(match[1]), parseInt(match[2]),
                parseInt(match[3]), parseInt(match[4]),
                parseInt(match[5]), parseInt(match[6]));
        });
    }
}