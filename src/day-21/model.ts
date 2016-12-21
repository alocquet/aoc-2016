export interface Instruction {
    execute(input: string, reverse: boolean): string;
}

export class SwapPosition implements Instruction {
    constructor(public x: number, public y: number) { }
    execute(input: string, reverse = false): string {
        let min = Math.min(this.x, this.y);
        let max = Math.max(this.x, this.y);
        return input.substring(0, min) + input.charAt(max) + input.substring(min + 1, max) + input.charAt(min) + input.substring(max + 1);
    }
}

export class SwapLetter implements Instruction {
    constructor(public a: string, public b: string) { }
    execute(input: string, reverse = false): string {
        return new SwapPosition(input.indexOf(this.a), input.indexOf(this.b)).execute(input);
    }
}

export enum RotationDirection {
    left = 1, right = -1
}

export class RotateStep implements Instruction {
    constructor(public direction: RotationDirection, public steps: number) { }
    execute(input: string, reverse = false): string {
        let factor = this.direction * (reverse ? -1 : 1);
        let firstCharIdx = factor * this.steps % input.length;
        if (firstCharIdx < 0) { firstCharIdx = input.length + firstCharIdx; }
        return input.substring(firstCharIdx) + input.substring(0, firstCharIdx);
    }
}

export class RotatePosition implements Instruction {
    constructor(public letter: string) { }
    execute(input: string, reverse = false): string {
        let idx = input.indexOf(this.letter);
        if (reverse) {
            // calcul de l'ancien index
            if (idx % 2 === 0) {
                if (idx === 0) { idx += input.length; }
                idx = (idx + input.length - 2) / 2 + 2;
            } else {
                idx = (idx - 1) / 2 + 1;
            }
        } else {
            if (idx++ >= 4) { idx++; }
        }
        return new RotateStep(RotationDirection.right, idx).execute(input, reverse);
    }
}

export class Reverse implements Instruction {
    constructor(public x: number, public y: number) { }
    execute(input: string, reverse = false): string {
        let min = Math.min(this.x, this.y);
        let max = Math.max(this.x, this.y);
        return input.substring(0, min) + input.substring(min, max + 1).split('').reverse().join('') + input.substring(max + 1);
    }
}

export class Move implements Instruction {
    constructor(public x: number, public y: number) { }
    execute(input: string, reverse = false): string {
        let from = reverse ? this.y : this.x;
        let target = reverse ? this.x : this.y;
        let array = input.split('');
        let deleted = array.splice(from, 1);
        let result = array.slice(0, target);
        result.push(...deleted);
        result.push(...array.slice(target));
        return result.join('');
    }
}
