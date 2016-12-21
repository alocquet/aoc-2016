import * as Model from '../model';
import { Day21 } from '../day-21';

export class Day21Step2 extends Day21 {

    execute(input: string): string {
        let instructions = this.parse(input).reverse();
        let result = this.start;
        for (let instruction of instructions) {
            result = instruction.execute(result, true);
            console.log(instruction, result);
        }
        return result;
    }
}