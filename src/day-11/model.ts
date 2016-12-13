import * as Hash from 'object-hash';

export class Building {

    constructor(public floors: Floor[], public elevator: number = 0, public step: number = 0) { }

    clone(): Building {
        return new Building([].concat(this.floors).map(floor => floor.clone()), this.elevator, this.step);
    }

    hash(): string {
        /*let res = Hash(this.elevator + this.floors.reduce((hash, floor) => hash + ' | ' + floor.hash(), ' | '));
        return res;*/
        return this.elevator + this.floors.reduce((hash, floor) => hash + floor.hash(), '');
    }

    isLastStep(): boolean {
        return this.floors.slice(0, this.floors.length - 1).reduce((empty, floor) => empty && floor.isEmpty(), true);
    }

    applyStep(step: Step, newElevator: number) {
        let currFloor = this.floors[this.elevator];
        step.elements.forEach(elt => {
            currFloor.elements.splice(currFloor.elements.indexOf(elt), 1);
            this.floors[newElevator].elements.push(elt);
        });
        this.elevator = newElevator;
        this.step++;
    }

    isValid(): boolean {
        return this.floors.every(floor => floor.isValid());
    }
}

export enum ElementType {
    GENERATOR, CHIP
}
export class Element {
    constructor(public type: ElementType, public value: string) { }

    compareTo(other: Element): number {
        if (this.value === other.value) {
            return this.type - other.type;
        }
        if (this.value < other.value) {
            return -1;
        }
        return 1;
    }

    toString(): string {
        return this.value + (this.type === ElementType.GENERATOR ? 'G' : 'M');
    }
}
export class Floor {
    constructor(public id: number, public elements: Element[]) { }

    hash(): string {
        return this.id + this.elements.sort((a, b) => a.compareTo(b)).reduce((hash, elt) => hash + elt.toString(), '');
    }

    isEmpty(): boolean {
        return this.elements.length === 0;
    }

    clone(): Floor {
        return new Floor(this.id, this.elements.concat([]));
    }

    hasGenerator(value: string): boolean {
        return this.elements.find(elt => elt.type === ElementType.GENERATOR && elt.value === value) !== undefined;
    }

    getSingleChips(): Element[] {
        return this.elements.filter(elt => elt.type === ElementType.CHIP && !this.hasGenerator(elt.value));
    }

    isValid(): boolean {
        return this.getSingleChips().length === 0 || this.elements.filter(elt => elt.type === ElementType.GENERATOR).length === 0;
    }
}

export class Step {
    constructor(public elements: Element[]) { }

    isSingle(): boolean {
        return this.elements.length === 1;
    }
}

export class Histo {
    buildings: Building[] = [];

    size: number = 0;
    verbose: boolean = false;

    add(building: Building): Histo {
        let clone = new Histo();
        clone.size = this.size + 1;
        if (this.verbose) {
            clone.buildings = this.buildings.concat(building);
        }
        return clone;
    }
}