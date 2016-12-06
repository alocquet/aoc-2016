import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day3Step2 } from '.';

describe("day-03-s2", () => {
    let day = new Day3Step2();
    before(() => {
        use(chaiAsPromised);
        should();
    });
    it("Exemple de la définition en colonnes", () => {
        // Act
        let result = day.execute('101 301 501\n102 302 502\n103 303 503\n201 401 601\n202 402 602\n203 403 603');
        // Assert
        expect(result).to.be.equal(6);
    });
    it("Input...", () => {
        // Act
        let result = day.run();
        // Assert
        return result.should.eventually.equal(1826);
    });
});