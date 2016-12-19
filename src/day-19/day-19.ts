import { } from './model';

export abstract class Day19 {

    execute(elvesCount: number) {
        let elves = new Array(elvesCount).fill(1);
        let idx = 0;
        let elveId;
        while (elveId === undefined) {
            let nextId = this.getElfToSteal(elves, idx);
            elves[idx] += elves[nextId];
            elves[nextId] = 0;
            nextId = this.getNextElf(elves, idx);
            if (nextId === -1) {
                elveId = idx;
            } else {
                idx = nextId;
            }
        }
        return elveId + 1;
    }

    abstract getElfToSteal(elves: number[], start: number);

    getNextElf(elves: number[], start: number) {
        let idx = start + 1;
        while (idx !== start) {
            if (idx === elves.length) {
                idx = 0;
            }
            if (elves[idx] !== 0) {
                return idx;
            }
            idx++;
        }
        return -1;
    }

}