import { Day } from '../day';
import { Position } from './model';

export abstract class Day2 extends Day<string> {

    constructor() { super('assets/day-02.txt'); }

    execute(input: string): string {
        let actions = this.parse(input);
        let position = this.getStartPosition();
        let result = '';
        actions.forEach(actionLine => {
            actionLine.forEach(action => {
                switch (action) {
                    case 'U': if (this.getKey(position.x, position.y - 1)) { position.y--; } break;
                    case 'D': if (this.getKey(position.x,position.y + 1)) { position.y++; } break;
                    case 'R': if (this.getKey(position.x + 1, position.y)) { position.x++; } break;
                    case 'L': if (this.getKey(position.x - 1, position.y)) { position.x--; } break;
                }
            });
            result = result + this.getKeypad()[position.y][position.x];
        });
        return result;
    }

    abstract getKeypad(): string[][];

    abstract getStartPosition(): Position;

    getKey(x: number, y: number): string {
        return this.getKeypad()[y] ? this.getKeypad()[y][x] : undefined;
    }

    parse(input: string): String[][] {
        return input.split(/\r?\n/).map(line => line.split(''));
    }
}