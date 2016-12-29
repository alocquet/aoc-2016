import { Day24 } from '../day-24';
import { Cell, Path } from '../model';

export class Day24Step2 extends Day24 {

    getSizeToOrigin(pathes: Path[], node: Cell) {
        return pathes.find(path => path.origine === node && path.current.value === 0 || path.origine.value === 0 && path.current === node).size;
    }
}