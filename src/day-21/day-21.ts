import * as Model from './model';
import { Day } from '../day';

export abstract class Day21 extends Day<string> {

    patterns = new Map<RegExp, (regex: RegExpExecArray) => Model.Instruction>();

    constructor(public start: string) {
        super('assets/day-21.txt');
        this.patterns.set(/swap position (\d+) with position (\d+)/, res => new Model.SwapPosition(parseInt(res[1]), parseInt(res[2])));
        this.patterns.set(/swap letter (\w+) with letter (\w+)/, res => new Model.SwapLetter(res[1], res[2]));
        this.patterns.set(/rotate (left|right) (\d+) steps?/, res => new Model.RotateStep(res[1] === 'left' ? Model.RotationDirection.left : Model.RotationDirection.right, parseInt(res[2])));
        this.patterns.set(/rotate based on position of letter (\w+)/, res => new Model.RotatePosition(res[1]));
        this.patterns.set(/reverse positions (\d+) through (\d+)/, res => new Model.Reverse(parseInt(res[1]), parseInt(res[2])));
        this.patterns.set(/move position (\d+) to position (\d+)/, res => new Model.Move(parseInt(res[1]), parseInt(res[2])));
    }

    parse(input: string): Model.Instruction[] {
        return input.split(/\r?\n/).map(line => {
            for (let pattern of this.patterns.entries()) {
                let match = pattern[0].exec(line);
                if (match) {
                    return pattern[1](match);
                }
            }
        });
    }
}