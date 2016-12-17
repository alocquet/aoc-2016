import { Position } from './../model';
import { Day17 } from '../day-17';

export class Day17Step1 extends Day17 {

    execute(): string {
        let position = new Position(0, 0, '');
        while (position.x < this.size || position.y < this.size) {
            this.queue.push(...this.getNextPositions(position));
            position = this.queue.shift();
        }
        return position.path;
    }

}