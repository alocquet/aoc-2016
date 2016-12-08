export namespace Model {
    export interface Instruction {
    }

    export class Rectangle implements Instruction {
        constructor(public x: number, public y: number) { }
    }

    export enum RotationType {
        ROW, COLUMN
    }
    export class Rotation implements Instruction {
        constructor(public type: RotationType, public index: number, public factor: number) { }
    }

    export class Screen {
        leds: boolean[][];

        constructor(private column: number, private row: number) {
            this.leds = new Array(row).fill(false).map(l => new Array(column).fill(false));
        }

        count(): number {
            return this.leds.reduce((total, line) => total + line.reduce((lineTotal, cell) => lineTotal + (cell ? 1 : 0), 0), 0);
        }

        toString(): string {
            return this.leds.reduce((str, line) => str + line.reduce((lineStr, cell) => lineStr + (cell ? '*' : ' '), '') + '\n', '');
        }

        apply(inst: Instruction) {
            if (inst instanceof Rectangle) {
                let rect = <Rectangle>inst;
                for (let ix = 0; ix < rect.x; ix++) {
                    for (let iy = 0; iy < rect.y; iy++) {
                        this.leds[iy][ix] = !this.leds[iy][ix];
                    }
                }
            } else {
                let rotate = <Rotation>inst;
                let clone = this.cloneLeds();
                if (rotate.type === RotationType.COLUMN) {
                    for (let row = 0; row < this.row; row++) {
                        this.leds[(row + rotate.factor) % this.row][rotate.index] = clone[row][rotate.index];
                    }
                } else {
                    for (let col = 0; col < this.column; col++) {
                        this.leds[rotate.index][(col + rotate.factor) % this.column] = clone[rotate.index][col];
                    }
                }
            }
        }

        cloneLeds(): boolean[][] {
            return [].concat(this.leds).map(line => [].concat(line));
        }
    }
}