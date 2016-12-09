import { CompressedBlock } from './../model';
import { Day9 } from '../day-09';

export class Day9Step2 extends Day9 {
    createCompressedBlock(factor: number, input: string) {
        return new CompressedBlock(factor, this.parse(input));
    }
}