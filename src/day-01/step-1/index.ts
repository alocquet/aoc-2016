import { Action, Rotation, Position, Direction } from '../model';
import { Day1 } from '../day-01';

export class Day1Step1 extends Day1 {

    execute(input: string): number {
        let actions = this.parse(input);
        let position: Position = new Position();
        actions.forEach(action => {
            // compute new position
            position.direction = this.getNewDirection(position, action);
            // compute new coordinates
            let factors = Direction.getFactors(position.direction);
            position.x = position.x + action.step * factors.x;
            position.y = position.y + action.step * factors.y;
        });
        return this.computeDistance(position);
    }
}