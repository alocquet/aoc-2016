import { FileLoader } from '../../utils/file-loader';
import { Action, Rotation, Position, Direction } from '../model';
import { Day1 } from '../day-01';

export class Day1Step2 extends Day1 {

    execute(input: string): number {
        let actions = this.parse(input);
        let positions: Position[] = [new Position()];
        let positionAlreadyVisited

        let found = actions.find(action => {
            // compute new position from last one
            let position = new Position(positions[positions.length - 1]);
            position.direction = this.getNewDirection(position, action);
            // compute new positions
            let factors = Direction.getFactors(position.direction);
            for (let i = 0; i < action.step; i++) {
                position = new Position(position);
                position.x = position.x + factors.x;
                position.y = position.y + factors.y;
                if(positions.find(elt=>elt.x === position.x && elt.y === position.y)){
                    positionAlreadyVisited = position;
                    return true;
                }
                positions.push(position);
            }
            return false;
        });
        return this.computeDistance(positionAlreadyVisited);
    }
}