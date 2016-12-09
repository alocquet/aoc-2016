import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day9Step2 } from '.';

describe('day-09-s2', () => {
    let day = new Day9Step2();
    before(() => {
        use(chaiAsPromised);
        should();
    });
    it('(3x3)XYZ still becomes XYZXYZXYZ, as the decompressed section contains no markers.', () => {
        // Act
        let result = day.execute('(3x3)XYZ');
        // Assert
        expect(result).to.be.equal(9);
    });
    it('X(8x2)(3x3)ABCY becomes XABCABCABCABCABCABCY, because the decompressed data from the (8x2) marker is then further decompressed, thus triggering the (3x3) marker twice for a total of six ABC sequences.', () => {
        // Act
        let result = day.execute('X(8x2)(3x3)ABCY');
        // Assert
        expect(result).to.be.equal(20);
    });
    it('(27x12)(20x12)(13x14)(7x10)(1x12)A decompresses into a string of A repeated 241920 times.', () => {
        // Act
        let result = day.execute('(27x12)(20x12)(13x14)(7x10)(1x12)A');
        // Assert
        expect(result).to.be.equal(241920);
    });
    it('(25x3)(3x3)ABC(2x3)XY(5x2)PQRSTX(18x9)(3x2)TWO(5x7)SEVEN becomes 445 characters long.', () => {
        // Act
        let result = day.execute('(25x3)(3x3)ABC(2x3)XY(5x2)PQRSTX(18x9)(3x2)TWO(5x7)SEVEN');
        // Assert
        expect(result).to.be.equal(445);
    });
    it('Input...', () => {
        // Act
        let result = day.run();
        // Assert
        return result.should.eventually.equal(10774309173);
    });
});