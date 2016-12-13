export class Instruction {
    constructor(public botId: number, public lower: Target, public upper: Target) { }
}

export abstract class Target {
    id: number;
    chips: number[] = [];
}

export class Bot extends Target {

    constructor(public id: number) { super(); }

    removeLowerChip(): number {
        return this.chips.sort((a, b) => a - b).shift();
    }
    removeUpperChip(): number {
        return this.chips.sort((a, b) => a - b).pop();
    }
}

export class Output extends Target {
    constructor(public id: number) { super(); }
}

export class SafeMap<ID, T> extends Map<ID, T> {

    constructor(public factory: (id: ID) => T) { super(); }

    safeGet(id: ID, ): T {
        if (!this.has(id)) {
            this.set(id, this.factory(id));
        }
        return this.get(id);
    }
}
