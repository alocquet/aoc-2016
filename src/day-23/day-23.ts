import { Day12 } from './../day-12/day-12';
import { Operation } from '../day-12/model';
import { OperationFactory } from './model';

export abstract class Day23 extends Day12 {

    parse(input: string): Operation[] {
        return input.split(/\r?\n/).map(OperationFactory.parse);
    }

}