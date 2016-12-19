import { Elf } from './model';

export class Day19Step2 {

    execute(elvesCount: number) {
        let elves = new Array(elvesCount).fill(1).map((count, idx) => new Elf(idx + 1));
        for (let idx = 0; idx < elvesCount; idx++) {
            elves[idx].next = elves[idx === elvesCount - 1 ? 0 : idx + 1];
            elves[idx].previous = elves[idx === 0 ? elvesCount - 1 : idx - 1];
        }
        let size = elvesCount;
        let elf = elves[0];
        let cursorIdx = 0;
        let cursorElf = elf;

        while (size > 1) {
            while (cursorIdx < Math.floor(size / 2)) {
                cursorElf = cursorElf.next;
                cursorIdx++;
            }
            elf.count += cursorElf.count;
            cursorElf.previous.next = cursorElf.next;
            cursorElf.next.previous = cursorElf.previous;

            // new cursors
            cursorElf = cursorElf.previous.next;
            cursorIdx--;
            elf = elf.next;
            size--;
        }
        return elf.id;
    }
}
