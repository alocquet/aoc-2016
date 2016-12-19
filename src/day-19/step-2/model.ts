export class Elf {
    count = 1;
    constructor(public id: number, public previous?: Elf, public next?: Elf) { }
}