import { Block, Phrase, SimpleBlock, CompressedBlock } from './model';
import { Day } from '../day';

export abstract class Day9 extends Day<number> {

    constructor() { super('assets/day-09.txt'); }

    execute(input: string): number {
        return this.parse(input).length;
    }

    parse(input: string): Phrase {
        let result: Phrase = new Phrase();
        let idx = 0;
        while (idx < input.length) {
            let startBracket = input.indexOf('(', idx);
            if (startBracket < 0) {
                result.blocks.push(new SimpleBlock(input.substring(idx)));
                break;
            } else {
                let xPosition = input.indexOf('x', startBracket);
                let endBracket = input.indexOf(')', xPosition);

                // push
                if (idx !== startBracket) {
                    result.blocks.push(new SimpleBlock(input.substring(idx, startBracket)));
                }

                // new Block
                // compute size and factor
                let size = parseInt(input.substring(startBracket + 1, xPosition));
                let factor = parseInt(input.substring(xPosition + 1, endBracket));
                let newBlock = result.blocks.push(this.createCompressedBlock(factor, input.substr(endBracket + 1, size)));
                // new index
                idx = endBracket + 1 + size;
            }
        }
        return result;
    }

    abstract createCompressedBlock(factor: number, input: string);
}
