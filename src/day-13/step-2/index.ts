import { Position } from './../model';
import { Day13 } from '../day-13';

export class Day13Step2 extends Day13 {

    constructor(favorite: number, private maxSteps: number) { super(favorite); }

    execute() {
        while (this.queue[0].step < this.maxSteps) {
            let current: Position = this.queue.shift();
            this.goToNextStep(current);
        }
        return this.visited.size;
    }

}