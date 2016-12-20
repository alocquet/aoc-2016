export class Range {
    constructor(public min: number, public max: number) { }
    static compare = (a: Range, b: Range) => a.min - b.min;
}