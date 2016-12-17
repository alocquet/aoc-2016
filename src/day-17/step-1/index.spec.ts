import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day17Step1 } from '.';

describe('day-17-s1', () => {
    before(() => {
        use(chaiAsPromised);
        should();
    });
    it('If your passcode were ihgpwlah, the shortest path would be DDRRRD.', () => {
        let day = new Day17Step1('ihgpwlah');
        // Act
        let result = day.execute();
        // Assert
        return expect(result).to.be.equal('DDRRRD');
    });
    it('With kglvqrro, the shortest path would be DDUDRLRRUDRD.', () => {
        let day = new Day17Step1('kglvqrro');
        // Act
        let result = day.execute();
        // Assert
        return expect(result).to.be.equal('DDUDRLRRUDRD');
    });
    it('With ulqzkmiv, the shortest would be DRURDRUDDLLDLUURRDULRLDUUDDDRR.', () => {
        let day = new Day17Step1('ulqzkmiv');
        // Act
        let result = day.execute();
        // Assert
        return expect(result).to.be.equal('DRURDRUDDLLDLUURRDULRLDUUDDDRR');
    });
    it('With njfxhljp, the shortest would be DRURDRUDDLLDLUURRDULRLDUUDDDRR.', () => {
        let day = new Day17Step1('njfxhljp');
        // Act
        let result = day.execute();
        // Assert
        return expect(result).to.be.equal('DURLDRRDRD');
    });
});