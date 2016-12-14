import { Position } from './../model';
import { Day13 } from '../day-13';

export class Day13Step1 extends Day13 {

    constructor(favorite: number, private target: Position) { super(favorite); }

    execute() {
        while (this.queue.length > 0) {
            let current: Position = this.queue.shift();
            if (current.x === this.target.x && current.y === this.target.y) {
                return current.step;
            }
            this.goToNextStep(current);
        }
        return -1;
    }

}