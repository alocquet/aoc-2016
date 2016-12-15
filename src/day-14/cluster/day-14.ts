import { Md5 } from 'ts-md5/dist/md5';
import { } from './model';

export class Request {
    constructor(public idx: number, public range: number, public salt: string, public stretch: number = 0) { }
}
export class Response {
    keys: number[] = [];
}
export class RequestProcessor {
    process(request: Request) {
        let response = new Response();
        for (let idxKey = request.idx; idxKey < request.idx + request.range; idxKey++) {
            let hash = this.computeMd5(request.salt + idxKey, request.stretch);
            let triple = this.getTriple(hash);
            if (triple) {
                let patternIdx = this.findPatternInHashes(idxKey + 1, request.salt, triple + triple + triple + triple + triple, request.stretch);
                if (patternIdx !== -1) {
                    response.keys.push(idxKey);
                }
            }
        }
        return response;
    }

    static cache = new Map<string, string>();

    computeMd5(input: string, stretch: number): string {
        if (RequestProcessor.cache.has(input)) {
            return RequestProcessor.cache.get(input);
        }
        let hash = input;
        for (let stretchId = 0; stretchId <= stretch; stretchId++) {
            hash = <string>Md5.hashStr(hash, false);
        }
        RequestProcessor.cache.set(input, hash);
        return hash;
    }

    getTriple(hash: string): string {
        for (let idx = 0; idx < hash.length - 2; idx++) {
            if (hash.charAt(idx) === hash.charAt(idx + 1) && hash.charAt(idx) === hash.charAt(idx + 2)) {
                return hash.charAt(idx);
            }
        }
    }

    findPatternInHashes(start: number, salt: string, pattern: string, stretch: number): number {
        for (let idxPattern = start + 0; idxPattern < start + 1000; idxPattern++) {
            let hash = this.computeMd5(salt + idxPattern, stretch);
            if (hash.indexOf(pattern) !== -1) {
                return idxPattern;
            }
        }
        return -1;
    }
}
