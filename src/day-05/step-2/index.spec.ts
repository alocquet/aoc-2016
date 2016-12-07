import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day5Step2 } from '.';

describe('day-05-s2', () => {
    let day = new Day5Step2();
    before(() => {
        use(chaiAsPromised);
        should();
    });
    it('\'abc\' give \'05ace8e3\'', function () {
        this.timeout(60000);
        // Act
        let result = day.execute('abc');
        // Assert
        return result.should.eventually.equal('05ace8e3');
    });
    it('\'reyedfim\' give \'863dde27\'', function () {
        this.timeout(60000);
        // Act
        let result = day.execute('reyedfim');
        // Assert
        return result.should.eventually.equal('863dde27');
    });
});