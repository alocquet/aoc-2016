export class Position {

    constructor(public x: number, public y: number, public step: number = 0) { }

    isWall(favorite: number): boolean {
        let x = this.x;
        let y = this.y;
        let sum = x * x + 3 * x + 2 * x * y + y + y * y + favorite;
        let bitCount = 0;
        while (sum !== 0) {
            if (sum % 2 === 1) { bitCount++; }
            sum = Math.floor(sum / 2);
        }
        return bitCount % 2 === 1;
    }

    isValid(favorite: number): boolean {
        return this.x >= 0 && this.y > 0 && !this.isWall(favorite);
    }

    get hash(): string {
        return this.x + ',' + this.y;
    }

    get north() { return new Position(this.x, this.y - 1, this.step + 1); };
    get south() { return new Position(this.x, this.y + 1, this.step + 1); };
    get west() { return new Position(this.x - 1, this.y, this.step + 1); };
    get east() { return new Position(this.x + 1, this.y, this.step + 1); };
}