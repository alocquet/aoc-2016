import { Day19 } from '../day-19';

export class Day19Step1 extends Day19 {
    getElfToSteal(elves: number[], start: number) {
        return this.getNextElf(elves, start);
    }
}