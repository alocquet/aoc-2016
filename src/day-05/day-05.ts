import { Md5 } from 'ts-md5/dist/md5';
import { Index } from './model';

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
        return <string>Md5.hashStr(input, false);
    }
}