import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day10Step2 } from '.';

describe('day-10-s2', () => {
    before(() => {
        use(chaiAsPromised);
        should();
    });
    it('Exemple...', () => {
        let day = new Day10Step2(2, 5);
        day.filename = 'assets/day-10-test.txt';
        // Act
        let result = day.run();
        // Assert
        return result.should.eventually.equal(30);
    });
    it('Input...', () => {
        let day = new Day10Step2(17, 61);
        // Act
        let result = day.run();
        // Assert
        return result.should.eventually.equal(2666);
    });
});