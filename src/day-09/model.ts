export interface Block {
    length: number;
}

export class SimpleBlock implements Block {
    constructor(public content: string) { }

    get length(): number {
        return this.content.length;
    }
}

export class CompressedBlock implements Block {
    constructor(public factor: number, public content: Block) { }

    get length(): number {
        return this.content.length * this.factor;
    }
}

export class Phrase {
    blocks: Block[] = [];

    get length(): number {
        return this.blocks.reduce((prev, curr) => prev + curr.length, 0);
    }
}