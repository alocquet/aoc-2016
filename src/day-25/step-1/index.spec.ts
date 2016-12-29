import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day25Step1 } from '.';

describe('day-25-s1', () => {
    before(() => {
        use(chaiAsPromised);
        should();
    });
    it('Input...', () => {
        let day = new Day25Step1('assets/day-25.txt');
        // Act
        let result = day.run();
        // Assert
        return result.should.eventually.equal(158);
    });
});