import { Day5 } from '../day-05';
import { Index } from '../model';

export class Day5Step1 extends Day5 {

    execute(input: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            let res = '';
            let curIndex = new Index(0, '');
            for (let idx = 0; idx < 8; idx++) {
                curIndex = this.computeNextIndex(input, curIndex);
                res += curIndex.hash.charAt(5);
            }
            resolve(res);
        });
    }
}