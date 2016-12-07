import { Ip } from '../model';
import { Day7 } from '../day-07';

export class Day7Step1 extends Day7 {

    execute(input: string): number {
        let lines = this.parse(input);
        return lines.filter(line => this.isTLS(line)).length;
    }
    
    isTLS(ip: Ip): boolean {
        return ip.supernet.find(elt => this.isAbba(elt)) &&
            !ip.hypernet.find(elt => this.isAbba(elt));
    }

    isAbba(input: string): boolean {
        if (input.length < 4) { return false; }
        for (let idx = 0; idx < input.length - 3; idx++) {
            if (input[idx] === input[idx + 3]
                && input[idx + 1] === input[idx + 2]
                && input[idx] !== input[idx + 1]) {
                return true;
            }
        }
        return false;
    }
}