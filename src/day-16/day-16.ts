import { } from './model';

export class Day16 {

    execute(diskSize: number, input: string): string {
        return this.binaryToString(this.generateHash(this.generateData(diskSize, this.stringToBinary(input))));
    }

    binaryToString = (input: boolean[]) => input.map(elt => elt ? '1' : '0').join('');
    stringToBinary = (input: string) => input.split('').map(char => char === '1');

    generateData(maxLength: number, input: boolean[]): boolean[] {
        let data = input;
        while (data.length < maxLength) {
            let dataLength = data.length;
            data.push(false);
            for (let idx = 0; idx < dataLength; idx++) {
                data.push(!data[dataLength - 1 - idx]);
            }
        }
        return data.slice(0, maxLength);
    }

    generateHash(input: boolean[]): boolean[] {
        let hash = input;
        while (hash.length % 2 === 0) {
            let newHash = [];
            for (let idx = 0; idx < hash.length / 2; idx++) {
                newHash.push(hash[idx * 2] === hash[idx * 2 + 1]);
            }
            hash = newHash;
        }
        return hash;
    }
}