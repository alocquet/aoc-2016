import { Position } from './model';

export abstract class Day13 {

    visited = new Map<string, Position>();
    queue: Position[] = [new Position(1, 1)];

    constructor(private favorite: number) { this.visited.set('1,1', this.queue[0]); }

    goToNextStep(current: Position) {
        this.pushPosition(current.north);
        this.pushPosition(current.south);
        this.pushPosition(current.west);
        this.pushPosition(current.east);
    }

    pushPosition(position: Position) {
        if (position.isValid(this.favorite) && !this.visited.has(position.hash)) {
            this.visited.set(position.hash, position);
            this.queue.push(position);
        }
    }
}
