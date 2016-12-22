import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day22Step1 } from '.';

describe('day-22-s1', () => {
    let day = new Day22Step1();
    before(() => {
        use(chaiAsPromised);
        should();
    });
    it('Input...', () => {
        // Act
        let result = day.run();
        // Assert
        return result.should.eventually.be.equal(993);
    });
});