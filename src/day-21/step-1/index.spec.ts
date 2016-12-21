import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day21Step1 } from '.';

describe('day-21-s1', () => {
    before(() => {
        use(chaiAsPromised);
        should();
    });
    it('Exemple...', () => {
        let day = new Day21Step1('abcde');
        day.filename = 'assets/day-21-test.txt';
        // Act
        let result = day.run();
        // Assert
        return result.should.eventually.be.equal('decab');
    });
    it('Input...', () => {
        let day = new Day21Step1('abcdefgh');
        // Act
        let result = day.run();
        // Assert
        return result.should.eventually.be.equal('gbhcefad');
    });
});