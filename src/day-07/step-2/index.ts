import { Ip } from '../model';
import { Day7 } from '../day-07';

export class Day7Step2 extends Day7 {

    execute(input: string): number {
        let lines = this.parse(input);
        return lines.filter(line => this.isSSL(line)).length;
    }

    isSSL(ip: Ip): boolean {
        return ip.supernet.find(sup => {
            let abas = this.getAba(sup);
            return this.hasCorrespondingBaB(ip, abas);
        }) !== undefined;
    }

    getAba(input: string): string[] {
        let res = [];
        if (input.length >= 3) {
            for (let idx = 0; idx < input.length - 2; idx++) {
                if (input[idx] === input[idx + 2]
                    && input[idx] !== input[idx + 1]) {
                    res.push(input.substr(idx, 3));
                }
            }
        }
        return res;
    }

    hasCorrespondingBaB(ip: Ip, abas: string[]): boolean {
        return ip.hypernet.find(hyp => {
            return abas.find(aba => hyp.match(aba[1] + aba[0] + aba[1]) !== null) !== undefined;
        }) !== undefined;
    }
}