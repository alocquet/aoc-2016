export class Cell {
    constructor(public x: number, public y: number, public wall: boolean, public value: number) { }
}

export class Path {
    constructor(public origine: Cell, public current: Cell, public size) { }
}