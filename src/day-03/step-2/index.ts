import { Day3 } from '../day-03';

export class Day3Step2 extends Day3 {

    getTriangles(input: string): number[][] {
        let res: number[][] = [];
        let lines = this.parse(input);
        for (let y = 0; y < 3; y++) {
            for (let x = 0; x < lines.length / 3; x++) {
                res.push([lines[3 * x][y], lines[3 * x + 1][y], lines[3 * x + 2][y]]);
            }
        }
        return res;
    }
}