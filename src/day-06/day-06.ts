import { Day } from '../day';
import { LetterCount } from './model';

export abstract class Day6 extends Day<string> {

    constructor() { super('assets/day-06.txt'); }

    execute(input: string): string {
        let res = '';
        let lines = this.parse(input);
        for (let idx = 0; idx < lines[0].length; idx++) {
            let colLetters = this.parse(input).map(line => line.charAt(idx));
            res += this.getMaxCountLetter(this.countLetters(colLetters));
        }
        return res;
    }

    countLetters(letters: string[]): LetterCount[] {
        let res = new Map<string, LetterCount>();
        letters.forEach(letter => {
            if (res.has(letter)) {
                res.get(letter).count++;
            } else {
                res.set(letter, new LetterCount(letter, 1));
            }
        });
        return Array.from(res.values());
    }

    abstract getMaxCountLetter(letters: LetterCount[]): string;

    parse(input: string): string[] {
        return input.split(/\r?\n/);
    }
}