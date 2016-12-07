import { LetterCount } from '../model';
import { Day6 } from '../day-06';

export class Day6Step1 extends Day6 {

    getMaxCountLetter(letters: LetterCount[]): string {
        return letters.sort((a, b) => b.count - a.count)[0].letter;
    }
}