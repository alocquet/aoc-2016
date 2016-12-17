import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day17Step2 } from '.';

describe('day-17-s2', () => {
    before(() => {
        use(chaiAsPromised);
        should();
    });
    it('If your passcode were ihgpwlah, the longest path would take 370 steps.', () => {
        let day = new Day17Step2('ihgpwlah');
        // Act
        let result = day.execute();
        // Assert
        return expect(result).to.be.equal(370);
    });
    it('With kglvqrro, the longest path would be 492 steps long.', () => {
        let day = new Day17Step2('kglvqrro');
        // Act
        let result = day.execute();
        // Assert
        return expect(result).to.be.equal(492);
    });
    it('With ulqzkmiv, the longest path would be 830 steps long.', () => {
        let day = new Day17Step2('ulqzkmiv');
        // Act
        let result = day.execute();
        // Assert
        return expect(result).to.be.equal(830);
    });
    it('With njfxhljp, the longest path would be 830 steps long.', () => {
        let day = new Day17Step2('njfxhljp');
        // Act
        let result = day.execute();
        // Assert
        return expect(result).to.be.equal(650);
    });
});