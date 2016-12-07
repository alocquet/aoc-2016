import { LetterCount } from '../model';
import { Day6 } from '../day-06';

export class Day6Step2 extends Day6 {

    getMaxCountLetter(letters: LetterCount[]): string {
        return letters.sort((a, b) => a.count - b.count)[0].letter;
    }
}