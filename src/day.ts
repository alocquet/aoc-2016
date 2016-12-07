import { FileLoader } from './utils/file-loader';

export abstract class Day<T> {

    constructor(public filename: string) {}

    run() : Promise<T>{
        return new FileLoader().readFile(this.filename).then(input=>this.execute(input));
    }

    abstract execute(input: string): T;
}