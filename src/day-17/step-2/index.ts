import { Position } from './../model';
import { Day17 } from '../day-17';

export class Day17Step2 extends Day17 {

    maxLength = 0;

    execute(): number {
        this.queue.push(new Position(0, 0, ''));
        while (this.queue.length !== 0) {
            let position = this.queue.shift();
            if (position.x === this.size && position.y === this.size) {
                this.maxLength = position.path.length;
            } else {
                this.queue.push(...this.getNextPositions(position));
            }
        }
        return this.maxLength;
    }
}