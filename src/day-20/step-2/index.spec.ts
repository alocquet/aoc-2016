import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day20Step2 } from '.';

describe('day-20-s2', () => {
    before(() => {
        use(chaiAsPromised);
        should();
    });
    it('Exemple...', () => {
        let day = new Day20Step2(10);
        // Act
        let result = day.execute('5-8\n0-2\n4-7');
        // Assert
        expect(result).to.be.equal(3);
    });
    it('Input...', () => {
        let day = new Day20Step2(4294967295);
        // Act
        let result = day.run();
        // Assert
        return result.should.eventually.be.equal(101);
    });
});