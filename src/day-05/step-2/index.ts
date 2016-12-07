import { Day5 } from '../day-05';
import { Index } from '../model';

export class Day5Step2 extends Day5 {

    execute(input: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            let res = [];
            let curIndex = new Index(0, '');
            while (res.slice(0, 8).join('').length !== 8) {
                curIndex = this.computeNextIndex(input, curIndex);
                if (!res[parseInt(curIndex.hash.charAt(5))]) {
                    res[parseInt(curIndex.hash.charAt(5))] = curIndex.hash.charAt(6);
                }
            }
            resolve(res.slice(0, 8).join(''));
        });
    }
}