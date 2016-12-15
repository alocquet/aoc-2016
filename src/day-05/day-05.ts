import { Index } from './model';
import { createHash } from 'crypto';

export abstract class Day5 {

    computeNextIndex(input: string, index: Index): Index {
        let res = new Index(index.idx, '');

        while (res.hash.substr(0, 5) !== '00000') {
            res.idx++;
            res.hash = this.computeMd5(input + String(res.idx));
        }
        return res;
    }

    computeMd5(input: string): string {
        return createHash('MD5').update(input).digest('hex');
    }
}