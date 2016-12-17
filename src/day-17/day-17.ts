import { Position } from './model';
import { createHash } from 'crypto';

export abstract class Day17 {

    size = 3;
    queue: Position[] = [];

    constructor(public passcode: string) { }

    getNextPositions(position: Position): Position[] {
        let hash = createHash('MD5').update(this.passcode + position.path).digest('hex');
        let res: Position[] = [];
        if (position.x > 0 && hash[0] > 'a') { res.push(new Position(position.x - 1, position.y, position.path + 'U')); }
        if (position.x < this.size && hash[1] > 'a') { res.push(new Position(position.x + 1, position.y, position.path + 'D')); }
        if (position.y > 0 && hash[2] > 'a') { res.push(new Position(position.x, position.y - 1, position.path + 'L')); }
        if (position.y < this.size && hash[3] > 'a') { res.push(new Position(position.x, position.y + 1, position.path + 'R')); }
        return res;
    }
}