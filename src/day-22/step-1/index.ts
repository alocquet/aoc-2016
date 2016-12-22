import { Node } from '../model';
import { Day22 } from '../day-22';

export class Day22Step1 extends Day22 {

    execute(input: string): number {
        let nodes = this.parse(input);
        let pairs = this.getViablesPairs(nodes);
        return pairs.length;
    }

    getViablesPairs(nodes: Node[]) {
        let result = [];
        for (let a of nodes) {
            for (let b of nodes) {
                if (a !== b && this.isViable(a, b)) {
                    result.push({ a: a, b: b });
                }
            }
        }
        return result;
    }
}