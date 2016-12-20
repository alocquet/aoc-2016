import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day20Step1 } from '.';

describe('day-20-s1', () => {
    let day = new Day20Step1();
    before(() => {
        use(chaiAsPromised);
        should();
    });
    it('Exemple...', () => {
        // Act
        let result = day.execute('5-8\n0-2\n4-7');
        // Assert
         expect(result).to.be.equal(3);
    });
    it('Input...', () => {
        // Act
        let result = day.run();
        // Assert
         return result.should.eventually.be.equal(14975795);
    });
});