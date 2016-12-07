import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day4Step2 } from '.';
import { Room } from '../model';

describe('day-04-s2', () => {
    let day = new Day4Step2();
    before(() => {
        use(chaiAsPromised);
        should();
    });
    it('the real name for qzmt-zixmtkozy-ivhz-343 is very encrypted name.', () => {
        // Act
        let result = day.decrypt(new Room('qzmt-zixmtkozy-ivhz', 343, 'abxyz'));
        // Assert
        expect(result).to.be.equal('very encrypted name');
    });
    it('Input...', () => {
        // Act
        let result = day.run();
        // Assert
        return result.should.eventually.equal(324);
    });
});