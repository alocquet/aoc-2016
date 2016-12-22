import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day22Step2 } from '.';

describe('day-22-s2', () => {
    let day = new Day22Step2();
    before(() => {
        use(chaiAsPromised);
        should();
    });
    it('Input...', () => {
        // Act
        let result = day.run();
        // Assert
        return result.should.eventually.be.equal(202);
    });
});