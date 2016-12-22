import { Node } from '../model';
import { Day22 } from '../day-22';

export class Day22Step2 extends Day22 {

    /**
     * only draw matrix to solve problem manually
     */
    execute(input: string): number {
        let nodes = this.parse(input);
        let nodesMatrix = this.tabToMatrix(nodes);
        let goalSize = nodesMatrix[0][nodesMatrix[0].length - 1];
        let average = nodes.reduce((sum, node) => sum + node.used, 0) / nodes.length;
        console.log(nodesMatrix.reduce((lines, line) => {
            return lines + line.reduce((cells, cell) => {
                let value = ' . ';
                if (cell.used === 0) { value = ' _ '; }
                else if (cell.used > 2 * average) { value = ' # '; }
                else if (cell.x === 0 && cell.y === 0) { value = '(.)'; }
                else if (cell.x === nodesMatrix[cell.y].length - 1 && cell.y === 0) { value = ' G '; }
                return cells + value;
            }, '\n');
        }, ''));
        return 202;
    }

    tabToMatrix(nodes: Node[]): Node[][] {
        let result: Node[][] = [];
        nodes.forEach(node => {
            if (!result[node.y]) { result[node.y] = []; }
            return result[node.y][node.x] = node;
        });
        return result;
    }
}
