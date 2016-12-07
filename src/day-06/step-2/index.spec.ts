import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day6Step2 } from '.';

describe("day-06-s2", () => {
    before(() => {
        use(chaiAsPromised);
        should();
    });
    it("Exemple...", () => {
        let day = new Day6Step2();
        day.filename = 'assets/day-06-test.txt';
        // Act
        let result = day.run();
        // Assert
        return result.should.eventually.equal('advent');
    });
    it("Input...", () => {
        let day = new Day6Step2();
        // Act
        let result = day.run();
        // Assert
        return result.should.eventually.equal('lragovly');
    });
});