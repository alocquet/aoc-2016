import { Day } from '../day';

export abstract class Day3 extends Day<number> {

    constructor() { super('assets/day-03.txt'); }

    pattern = /\s*(\d+)\s*(\d+)\s*(\d+)/;

    execute(input: string): number {
        let triangles = this.getTriangles(input);
        return triangles.filter(triangle => {
            triangle.sort((a, b) => a - b);
            return triangle[0] + triangle[1] > triangle[2];
        }).length;
    }

    abstract getTriangles(input: string): number[][];

    parse(input: string): number[][] {
        return input.split(/\r?\n/).map(line => {
            let res = this.pattern.exec(line);
            return [parseInt(res[1]), parseInt(res[2]), parseInt(res[3])];
        });
    }
}