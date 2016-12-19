import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day19Step2 } from '.';

describe('day-19-s2', () => {
    let day = new Day19Step2();
    before(() => {
        use(chaiAsPromised);
        should();
    });
    it('With 5 elves, the last elve with present is 3', () => {
        // Act
        let result = day.execute(5);
        // Assert
         expect(result).to.be.equal(2);
    });
    it('With 3014387 elves, the last elve with present is 1420064', function () {
        this.timeout(2 * 60 * 1000);
        // Act
        let result = day.execute(3014387);
        // Assert
         expect(result).to.be.equal(1420064);
    });
});