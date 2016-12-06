import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day3Step1 } from '.';

describe("day-03-s1", () => {
    let day = new Day3Step1();
    before(() => {
        use(chaiAsPromised);
        should();
    });
    it("Exemple 5 10 25 n'est pas un triangle", () => {
        // Act
        let result = day.execute('5 10 25');
        // Assert
        expect(result).to.be.equal(0);
    });
    it("Exemple 5 23 25 est un triangle", () => {
        // Act
        let result = day.execute('5 23 25');
        // Assert
        expect(result).to.be.equal(1);
    });
    it("Input...", () => {
        // Act
        let result = day.run();
        // Assert
        return result.should.eventually.equal(982);
    });
});