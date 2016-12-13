export interface Operation { }

export class Cpy implements Operation {
    constructor(public value: string, public target: string) { }
}

export class Inc implements Operation {
    constructor(public target: string) { }
}

export class Dec implements Operation {
    constructor(public target: string) { }
}

export class Jnz implements Operation {
    constructor(public test: string, public factor: string) { }
}
