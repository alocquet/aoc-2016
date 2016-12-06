import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day1Step2 } from '.';

describe("day-01-s2", () => {
    let day1Step2 = new Day1Step2();
    before(() => {
        use(chaiAsPromised);
        should();
    });

    it(" if your instructions are R8, R4, R4, R8, the first location you visit twice is 4 blocks away, due East.", () => {
        // Act
        let result = day1Step2.execute('R8, R4, R4, R8');
        // Assert
        expect(result).to.be.equal(4);
    });
    it("Input...", () => {
        // Act
        let result = day1Step2.run();
        // Assert
        return result.should.eventually.equal(130);
    });
});