import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day7Step2 } from '.';

describe("day-07-s2", () => {
    let day = new Day7Step2();
    before(() => {
        use(chaiAsPromised);
        should();
    });
    it("supports SSL (aba outside square brackets with corresponding bab within square brackets).", () => {
        // Act
        let result = day.execute('aba[bab]xyz');
        // Assert
        return expect(result).to.be.equal(1);
    });
    it("does not support SSL (xyx, but no corresponding yxy).", () => {
        // Act
        let result = day.execute('xyx[xyx]xyx');
        // Assert
        return expect(result).to.be.equal(0);
    });
    it("supports SSL (eke in supernet with corresponding kek in hypernet; the aaa sequence is not related, because the interior character must be different).", () => {
        // Act
        let result = day.execute('aaa[kek]eke');
        // Assert
        return expect(result).to.be.equal(1);
    });
    it("supports SSL (zaz has no corresponding aza, but zbz has a corresponding bzb, even though zaz and zbz overlap).", () => {
        // Act
        let result = day.execute('zazbz[bzb]cdb');
        // Assert
        return expect(result).to.be.equal(1);
    });
    it("Input...", () => {
        // Act
        let result = day.run();
        // Assert
        return result.should.eventually.equal(242);
    });
});