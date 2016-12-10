import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day10Step1 } from '.';

describe('day-10-s1', () => {
    before(() => {
        use(chaiAsPromised);
        should();
    });
    it('Exemple...', () => {
        let day = new Day10Step1(2, 5);
        day.filename = 'assets/day-10-test.txt';
        // Act
        let result = day.run();
        // Assert
        return result.should.eventually.equal(2);
    });
    it('Input...', () => {
        let day = new Day10Step1(17, 61);
        // Act
        let result = day.run();
        // Assert
        return result.should.eventually.equal(47);
    });
});