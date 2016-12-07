import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day5Step1 } from '.';

describe("day-05-s1", () => {
    let day = new Day5Step1();
    before(() => {
        use(chaiAsPromised);
        should();
    });
    it("'abc' give '18f47a30'", function() {
        this.timeout(60000);
        // Act
        let result = day.execute('abc');
        // Assert
        return result.should.eventually.equal('18f47a30');
    });
    it("'reyedfim' give 'f97c354d'", function() {
        this.timeout(60000);
        // Act
        let result = day.execute('reyedfim');
        // Assert
        return result.should.eventually.equal('f97c354d');
    });
});