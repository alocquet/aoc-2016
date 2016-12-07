import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day7Step1 } from '.';

describe("day-07-s1", () => {
    let day = new Day7Step1();
    before(() => {
        use(chaiAsPromised);
        should();
    });
    it("supports TLS (abba outside square brackets).", () => {
        // Act
        let result = day.execute('abba[mnop]qrst');
        // Assert
        return expect(result).to.be.equal(1);
    });
    it("does not support TLS (bddb is within square brackets, even though xyyx is outside square brackets).", () => {
        // Act
        let result = day.execute('abcd[bddb]xyyx');
        // Assert
        return expect(result).to.be.equal(0);
    });
    it("does not support TLS (aaaa is invalid; the interior characters must be different).", () => {
        // Act
        let result = day.execute('aaaa[qwer]tyui');
        // Assert
        return expect(result).to.be.equal(0);
    });
    it("supports TLS (oxxo is outside square brackets, even though it's within a larger string).", () => {
        // Act
        let result = day.execute('ioxxoj[asdfgh]zxcvbn');
        // Assert
        return expect(result).to.be.equal(1);
    });
    it("more complex ip", () => {
        // Act
        let result = day.execute('gdlrknrmexvaypu[crqappbbcaplkkzb]vhvkjyadjsryysvj[nbvypeadikilcwg]jwxlimrgakadpxu[dgoanojvdvwfabtt]yqsalmulblolkgsheo');
        // Assert
        return expect(result).to.be.equal(0);
    });
    it("Input...", () => {
        // Act
        let result = day.run();
        // Assert
        return result.should.eventually.equal(110);
    });
});