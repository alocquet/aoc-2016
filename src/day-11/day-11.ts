import { Building, Floor, Step, Histo } from './model';

export abstract class Day11 {

    histo = new Map<string, Histo>();

    queue: Building[] = [];

    constructor(public buildingInit: Building) { }

    run(): number {
        this.queue.push(this.buildingInit);
        let foundWay = this.findWay(new Histo());
        // this.foundWay.buildings.forEach(build => console.log(build.hash()));
        return foundWay.step;
    }

    findWay(histo: Histo): Building {
        let foundWay: Building;
        let step = 0;
        while (!foundWay) {
            let building = this.queue.shift();
            if (building.isLastStep()) {
                foundWay = building;
                break;
            }
            if (building.step > step) {
                step = building.step;
                console.log(step);
            }
            let newBuildings = this.computeNextFloor(histo, building, building.elevator + 1);
            newBuildings = newBuildings.concat(this.computeNextFloor(histo, building, building.elevator - 1));
            for (let newBuilding of newBuildings) {
                this.queue.push(newBuilding);
                //console.log(newBuilding.hash());
            }
            // console.log(this.queue.length);
        }
        return foundWay;
    }

    computeNextFloor(histo: Histo, building: Building, newElevator: number): Building[] {
        if (newElevator >= 0 && newElevator < building.floors.length &&
            (newElevator > building.elevator || !building.floors.slice(0, building.elevator).every(floor => floor.isEmpty()))) {
            let floor = building.floors[building.elevator];
            let nextFloor = building.floors[newElevator];
            let steps = this.getNextSteps(floor, nextFloor);
            return this.applySteps(histo, building, steps, newElevator);
        }
        return [];
    }

    applySteps(histo: Histo, building: Building, steps: Step[], newElevator: number): Building[] {
        let result: Building[] = [];
        steps.forEach(step => {
            let newBuilding = building.clone();
            newBuilding.applyStep(step, newElevator);
            if (newBuilding.isValid()) {
                let hash = newBuilding.hash();
                let alreadyVisited = this.histo.get(hash);
                if (!alreadyVisited || alreadyVisited.size > histo.size) {
                    this.histo.set(hash, histo);
                    result.push(newBuilding);
                }
            }
        });
        return result;
    }

    getNextSteps(floor: Floor, nextFloor: Floor): Step[] {
        let steps: Step[] = [];
        for (let idx1 = 0; idx1 < floor.elements.length; idx1++) {
            steps.push(new Step([floor.elements[idx1]]));
            for (let idx2 = idx1 + 1; idx2 < floor.elements.length; idx2++) {
                let first = floor.elements[idx1];
                let second = floor.elements[idx2];
                if (first.type === second.type || first.value === second.value) {
                    steps.push(new Step([first, second]));
                }
            }
        }
        return steps;
    }


}