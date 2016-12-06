import { Day } from '../day';
import { Room, LetterCount } from './model';

export abstract class Day4 extends Day<number> {

    constructor() { super('assets/day-04.txt'); }

    isValid(room: Room): boolean {
        let letters = new Map<string, LetterCount>();
        // count letters
        room.name.split('').filter(letter => letter !== '-').forEach(letter => {
            if (letters.has(letter)) {
                letters.get(letter).count++;
            } else {
                letters.set(letter, new LetterCount(letter, 1));
            }
        });
        let code = Array.from(letters.values())
            // sort
            .sort((a, b) => {
                if (a.count === b.count) {
                    return a.letter.charCodeAt(0) - b.letter.charCodeAt(0);
                }
                return b.count - a.count;
            })
            // map to code
            .map(letter => letter.letter)
            // substring
            .slice(0, 5).join('');
        return room.checksum === code;
    }

    pattern = /([a-z\-]+)-(\d+)\[([a-z]+)\]/;

    parse(input: string): Room[] {
        return input.split(/\r?\n/).map(line => {
            let res = this.pattern.exec(line);
            return new Room(res[1], parseInt(res[2]), res[3]);
        });
    }
}