import { Day2 } from '../day-02';
import { Position } from '../model';

export class Day2Step2 extends Day2 {

    keypad = [[, , '1', , ], [, '2', '3', '4', ], ['5', '6', '7', '8', '9'], [, 'A', 'B', 'C', ], [, , 'D', , ]];

    getKeypad(): string[][] {
        return this.keypad;
    }

    getStartPosition(): Position {
        return new Position(0, 2);
    }
}