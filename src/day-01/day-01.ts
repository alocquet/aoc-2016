import { FileLoader } from '../utils/file-loader';
import { Day } from '../day';
import { Action, Rotation, Position, Direction } from './model';

export abstract class Day1 extends Day<number> {

    constructor() { super('assets/day-01.txt'); }

    getNewDirection(position: Position, action: Action): Direction {
        // compute new position
        let direction = position.direction + action.rotation;
        if (direction < 0) { direction += 4; }
        if (direction > 3) { direction -= 4; }
        return direction;
    }

    computeDistance(position: Position) {
        return Math.abs(position.x) + Math.abs(position.y);
    }

    parse(input: string): Action[] {
        return input.split(', ').map(actionString => {
            let result = new Action();
            result.rotation = actionString.charAt(0) === 'L' ? Rotation.LEFT : Rotation.RIGHT;
            result.step = parseInt(actionString.substr(1));
            return result;
        });
    }
}