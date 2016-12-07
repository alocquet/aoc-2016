import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day2Step1 } from '.';

describe('day-02-s1', () => {
    let day2Step1 = new Day2Step1();
    before(() => {
        use(chaiAsPromised);
        should();
    });


    it('Exemple...', () => {
        // Act
        let result = day2Step1.execute('ULL\nRRDDD\nLURDL\nUUUUD');
        // Assert
        expect(result).to.be.equal('1985');
    });
    it('Input...', () => {
        // Act
        let result = day2Step1.run();
        // Assert
        return result.should.eventually.equal('35749');
    });
});