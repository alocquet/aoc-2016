import { Day4 } from '../day-04';
import { Room } from '../model';

export class Day4Step2 extends Day4 {

    execute(input: string): number {
        return   this.parse(input)
            .find(room => this.decrypt(room).search(/pole/) > 0)
            .id;
    }

    decrypt(room: Room): string {
        const A = 97;
        return room.name.split('').map(letter => {
            if (letter === '-') {
                return ' ';
            }
            return String.fromCharCode((letter.charCodeAt(0) - A + room.id) % 26 + A);
        }).join('');
    }
}