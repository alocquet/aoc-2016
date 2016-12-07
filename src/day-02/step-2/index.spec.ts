import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day2Step2 } from '.';

describe('day-02-s2', () => {
    let day2Step2 = new Day2Step2();
    before(() => {
        use(chaiAsPromised);
        should();
    });


    it('Exemple...', () => {
        // Act
        let result = day2Step2.execute('ULL\nRRDDD\nLURDL\nUUUUD');
        // Assert
        expect(result).to.be.equal('5DB3');
    });
    it('Input...', () => {
        // Act
        let result = day2Step2.run();
        // Assert
        return result.should.eventually.equal('9365C');
    });
});