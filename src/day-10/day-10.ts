import { Day } from '../day';
import { Instruction, Bot, Target, Output, SafeMap } from './model';

export abstract class Day10 extends Day<number> {

    constructor(public firstChip: number, public secondChip: number) { super('assets/day-10.txt'); }

    bots = new SafeMap<number, Bot>(id => new Bot(id));
    outputs = new SafeMap<number, Output>(id => new Output(id));
    instructions: Instruction[] = [];

    parse(input): void {
        let initPattern = /value (\d+) goes to bot (\d+)/;
        let sharePattern = /bot (\d+) gives low to (\w+) (\d+) and high to (\w+) (\d+)/;

        input.split(/\r?\n/).forEach(line => {
            let init = initPattern.exec(line);
            if (init) {
                // initialise bots with initial chips
                let chipValue = parseInt(init[1]);
                let botId = parseInt(init[2]);
                this.bots.safeGet(botId).chips.push(chipValue);
            } else {
                // generate share instructions
                let share = line.match(sharePattern);
                let botId = parseInt(share[1]);
                let lowerTarget = this.createTarget(parseInt(share[3]), share[2]);
                let upperTarget = this.createTarget(parseInt(share[5]), share[4]);
                this.instructions.push(new Instruction(botId, lowerTarget, upperTarget));
            }
        });
    }

    execute(input: string): number {
        this.parse(input);
        let result;
        let stop = false;
        while (!stop) {
            stop = true;
            // execute instructions
            for (let instruction of this.instructions) {
                let bot = this.bots.safeGet(instruction.botId);
                if (bot.chips.length === 2) {
                    stop = false;
                    if (!result && bot.chips.indexOf(this.firstChip) !== -1 && bot.chips.indexOf(this.secondChip) !== -1) {
                        result = bot.id;
                    }
                    let lower = bot.removeLowerChip();
                    let upper = bot.removeUpperChip();
                    if (instruction.lower instanceof Bot) {
                        this.bots.safeGet(instruction.lower.id).chips.push(lower);
                    } else {
                        this.outputs.safeGet(instruction.lower.id).chips.push(lower);
                    }
                    if (instruction.upper instanceof Bot) {
                        this.bots.safeGet(instruction.upper.id).chips.push(upper);
                    } else {
                        this.outputs.safeGet(instruction.upper.id).chips.push(upper);
                    }
                }
            }
        }
        return result;
    }


    createTarget(id: number, type: string): Target {
        if (type === 'bot') {
            return this.bots.safeGet(id);
        }
        return this.outputs.safeGet(id);
    }

}