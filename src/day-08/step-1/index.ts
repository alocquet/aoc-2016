import { Model } from '../model';
import { Day8 } from '../day-08';

export class Day8Step1 extends Day8 {

    screen: Model.Screen;

    constructor(x: number, y: number) {
        super();
        this.screen = new Model.Screen(x, y);
    }

    execute(input: string): number {
        let instrs = this.parse(input);
        instrs.forEach(instr => this.screen.apply(instr));
        // console.log(this.screen.toString());
        return this.screen.count();
    }
}