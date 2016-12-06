import { Day4 } from '../day-04';

export class Day4Step1 extends Day4 {

    execute(input: string): number {
        return this.parse(input).filter(this.isValid).reduce((prev, elt) => prev + elt.id, 0);
    }
}