import { Operation } from './../day-12/model';

export class Tgl implements Operation {
    constructor(public idx: string) { }
}
export class Mul implements Operation {
    constructor(public target: string, public a: string, public b: string) { }
}