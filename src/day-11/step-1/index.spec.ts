import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

import { Day11Step1 } from '.';
import { Building, Floor, Element, ElementType } from './../model';

describe('day-11', () => {
    before(() => {
        use(chaiAsPromised);
        should();
    });
    it('Exemple...', () => {
        let day = new Day11Step1(new Building([
            new Floor(0, [new Element(ElementType.CHIP, 'H'), new Element(ElementType.CHIP, 'L')]),
            new Floor(1, [new Element(ElementType.GENERATOR, 'H')]),
            new Floor(2, [new Element(ElementType.GENERATOR, 'L')]),
            new Floor(3, [])
        ]));
        // Act
        let result = day.run();
        // Assert
        expect(result).to.be.equal(11);
    });
   it('Input...', function () {
        this.timeout(2 * 60 * 1000);
        let result = new Promise<number>((resolve, reject) => {
            let day = new Day11Step1(new Building([
                new Floor(0, [new Element(ElementType.GENERATOR, 'T'), new Element(ElementType.GENERATOR, 'PL'), new Element(ElementType.GENERATOR, 'S'), new Element(ElementType.CHIP, 'T')]),
                new Floor(1, [new Element(ElementType.CHIP, 'PL'), new Element(ElementType.CHIP, 'S')]),
                new Floor(2, [new Element(ElementType.GENERATOR, 'PR'), new Element(ElementType.GENERATOR, 'R'), new Element(ElementType.CHIP, 'PR'), new Element(ElementType.CHIP, 'R')]),
                new Floor(3, [])
            ]));
            // Act
            resolve(day.run());
        });
        // Assert
        return result.should.eventually.equal(31);
    });
    it('Input - Step 2...', function () {
        this.timeout(60 * 60 * 1000);
        let result = new Promise<number>((resolve, reject) => {
            let day = new Day11Step1(new Building([
                new Floor(0, [new Element(ElementType.GENERATOR, 'T'), new Element(ElementType.GENERATOR, 'PL'), new Element(ElementType.GENERATOR, 'S'), new Element(ElementType.CHIP, 'T')
                , new Element(ElementType.GENERATOR, 'E'), new Element(ElementType.CHIP, 'E'), new Element(ElementType.GENERATOR, 'D'), new Element(ElementType.CHIP, 'D')]),
                new Floor(1, [new Element(ElementType.CHIP, 'PL'), new Element(ElementType.CHIP, 'S')]),
                new Floor(2, [new Element(ElementType.GENERATOR, 'PR'), new Element(ElementType.GENERATOR, 'R'), new Element(ElementType.CHIP, 'PR'), new Element(ElementType.CHIP, 'R')]),
                new Floor(3, [])
            ]));
            // Act
            resolve(day.run());
        });
        // Assert
        return result.should.eventually.equal(55);
    });
});