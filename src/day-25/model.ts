import { Operation } from './../day-12/model';

export class Out implements Operation {
    constructor(public register: string) { }
}
