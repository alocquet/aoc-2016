import { CompressedBlock, SimpleBlock } from './../model';
import { Day9 } from '../day-09';

export class Day9Step1 extends Day9 {
    createCompressedBlock(factor: number, input: string) {
        return new CompressedBlock(factor, new SimpleBlock(input));
    }
}