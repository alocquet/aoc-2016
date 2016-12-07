export class Action {
    rotation: Rotation;
    step: number;
}

export enum Rotation {
    LEFT = -1,
    RIGHT = 1
}

export class Coordinates {
    constructor(public x: number = 0, public y: number = 0) { }
}

export class Position extends Coordinates {
    direction: Direction = Direction.NORTH;
    constructor(position?: Position) {
        super();
        if (position) {
            this.x = position.x;
            this.y = position.y;
            this.direction = position.direction;
        }
    }
}

export enum Direction {
    NORTH = 0,
    EAST = 1,
    SOUTH = 2,
    WEST = 3
}
export namespace Direction {
    export function getFactors(direction: Direction): Coordinates {
        switch (direction) {
            case Direction.EAST: return new Coordinates(1, 0);
            case Direction.WEST: return new Coordinates(-1, 0);
            case Direction.NORTH: return new Coordinates(0, 1);
            case Direction.SOUTH: return new Coordinates(0, -1);
        }
    }
}
