import { Day10 } from '../day-10';

export class Day10Step2 extends Day10 {

    execute(input: string): number {
        super.execute(input);
        console.log(this.outputs);
        return Array.from(this.outputs.values())
            .filter(output => output.id >= 0 && output.id <= 2)
            .reduce((total, output) => total * output.chips
                .reduce((subTotal, chip) => subTotal * chip, 1), 1);
        ;
    }
}