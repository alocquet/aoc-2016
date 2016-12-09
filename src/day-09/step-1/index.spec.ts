import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day9Step1 } from '.';

describe('day-09-s1', () => {
    let day = new Day9Step1();
    before(() => {
        use(chaiAsPromised);
        should();
    });
    it('ADVENT contains no markers and decompresses to itself with no changes, resulting in a decompressed length of 6.', () => {
        // Act
        let result = day.execute('ADVENT');
        // Assert
        expect(result).to.be.equal(6);
    });
    it('A(1x5)BC repeats only the B a total of 5 times, becoming ABBBBBC for a decompressed length of 7.', () => {
        // Act
        let result = day.execute('A(1x5)BC');
        // Assert
        expect(result).to.be.equal(7);
    });
    it('(3x3)XYZ becomes XYZXYZXYZ for a decompressed length of 9.', () => {
        // Act
        let result = day.execute('(3x3)XYZ');
        // Assert
        expect(result).to.be.equal(9);
    });
    it('A(2x2)BCD(2x2)EFG doubles the BC and EF, becoming ABCBCDEFEFG for a decompressed length of 11.', () => {
        // Act
        let result = day.execute('A(2x2)BCD(2x2)EFG');
        // Assert
        expect(result).to.be.equal(11);
    });
    it('(6x1)(1x3)A simply becomes (1x3)A - the (1x3) looks like a marker, but because it\'s within a data section of another marker, it is not treated any differently from the A that comes after it. It has a decompressed length of 6.', () => {
        // Act
        let result = day.execute('(6x1)(1x3)A');
        // Assert
        expect(result).to.be.equal(6);
    });
    it('X(8x2)(3x3)ABCY becomes X(3x3)ABC(3x3)ABCY (for a decompressed length of 18), because the decompressed data from the (8x2) marker (the (3x3)ABC) is skipped and not processed further.', () => {
        // Act
        let result = day.execute('X(8x2)(3x3)ABCY');
        // Assert
        expect(result).to.be.equal(18);
    });
    it('Input...', () => {
        // Act
        let result = day.run();
        // Assert
        return result.should.eventually.equal(110346);
    });
});