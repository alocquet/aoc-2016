import { Day } from '../day';
import { Model } from './model';

export abstract class Day8 extends Day<number> {

    constructor() { super('assets/day-08.txt'); }

    patternRect = /rect (\d+)x(\d+)/;
    patternRotate = /rotate (row|column) (?:x|y)=(\d+) by (\d+)/;

    parse(input: string): Model.Instruction[] {
        return input.split(/\r?\n/).map(line => {
            let rect = this.patternRect.exec(line);
            if (rect) {
                return new Model.Rectangle(parseInt(rect[1]), parseInt(rect[2]));
            }
            let rotate = this.patternRotate.exec(line);
            return new Model.Rotation(rotate[1] === 'row' ? Model.RotationType.ROW : Model.RotationType.COLUMN,
                parseInt(rotate[2]),
                parseInt(rotate[3]));
        });
    }
}
