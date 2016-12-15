import { Disc } from './model';
import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day15 } from './day-15';

describe('day-15-s1', () => {
    let day = new Day15();
    before(() => {
        use(chaiAsPromised);
        should();
    });
    it('Exemple...', () => {
        // Act
        let result = day.execute(`Disc #1 has 5 positions; at time=0, it is at position 4.
Disc #2 has 2 positions; at time=0, it is at position 1.`);
        // Assert
        expect(result).to.be.equal(5);
    });
    it('Input...', () => {
        // Act
        let result = day.run();
        // Assert
        return result.should.eventually.equal(122318);
    });
    it('Input Step 2...', () => {
        day.filename = 'assets/day-15-2.txt';
        // Act
        let result = day.run();
        // Assert
        return result.should.eventually.equal(3208583);
    });
});