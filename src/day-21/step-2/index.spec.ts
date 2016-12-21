import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day21Step2 } from '.';

describe('day-21-s2', () => {
    before(() => {
        use(chaiAsPromised);
        should();
    });
    it('Input from step 1...', () => {
        let day = new Day21Step2('gbhcefad');
        // Act
        let result = day.run();
        // Assert
        return result.should.eventually.be.equal('abcdefgh');
    });
    it('Input step 2...', () => {
        let day = new Day21Step2('fbgdceah');
        // Act
        let result = day.run();
        // Assert
        return result.should.eventually.be.equal('XXX');
    });
});