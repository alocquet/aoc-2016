import { Day3 } from '../day-03';

export class Day3Step1 extends Day3 {

    getTriangles(input: string): number[][] {
        return this.parse(input);
    }
}