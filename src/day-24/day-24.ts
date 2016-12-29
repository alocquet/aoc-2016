import { Day } from '../day';
import { Cell, Path } from './model';

export abstract class Day24 extends Day<number> {
    execute(input: string): number {
        let map = this.parse(input);
        let nodes: Cell[] = [];
        map.forEach(line => nodes.push(...line.filter(cell => cell.value !== undefined)));
        let shortestPathes = this.getShortestPathes(map, nodes);
        return this.getLowerSumFromZero(nodes, shortestPathes);
    }

    getLowerSumFromZero(nodes: Cell[], pathes: Path[]) {
        // first node
        let idx = nodes.findIndex(node => node.value === 0);
        let subNodes = [...nodes.slice()];
        let node = subNodes.splice(idx, 1)[0];
        return this.getLowerSum(subNodes, pathes, node);
    }

    getShortestPathes(map: Cell[][], nodes: Cell[]): Path[] {
        let shortestPathes: Path[] = [];
        for (let idx1 = 0; idx1 < nodes.length; idx1++) {
            for (let idx2 = idx1 + 1; idx2 < nodes.length; idx2++) {
                let node1 = nodes[idx1], node2 = nodes[idx2];
                shortestPathes.push(this.getShortestPath(map, node1, node2));
            }
        }
        return shortestPathes;
    }

    getShortestPath(map: Cell[][], node1: Cell, node2: Cell): Path {
        let queue: Path[] = [new Path(node1, node1, 0)];
        let visited: Cell[] = [node1];
        while (queue.length > 0) {
            let path = queue.shift();
            let nextCells = this.getNextCells(map, path.current);
            for (let nextCell of nextCells) {
                let nextPath = new Path(path.origine, nextCell, path.size + 1);
                if (nextCell === node2) {
                    return nextPath;
                } else if (visited.indexOf(nextCell) === -1) {
                    queue.push(nextPath);
                    visited.push(nextCell);
                }
            }
        }
    }

    getNextCells(map: Cell[][], curr: Cell) {
        let result: Cell[] = [];
        if (curr.x > 0 && !map[curr.y][curr.x - 1].wall) { result.push(map[curr.y][curr.x - 1]); }
        if (curr.x < map[curr.y].length - 1 && !map[curr.y][curr.x + 1].wall) { result.push(map[curr.y][curr.x + 1]); }
        if (curr.y > 0 && !map[curr.y - 1][curr.x].wall) { result.push(map[curr.y - 1][curr.x]); }
        if (curr.y < map.length - 1 && !map[curr.y + 1][curr.x].wall) { result.push(map[curr.y + 1][curr.x]); }
        return result;
    }

    getLowerSum(nodes: Cell[], pathes: Path[], start?: Cell) {
        let lower = -1;
        for (let node of nodes) {
            let size = pathes.find(path => path.origine === start && path.current === node || path.origine === node && path.current === start).size;
            if (nodes.length === 1) {
                size += this.getSizeToOrigin(pathes, node);
            } else {
                let idx = nodes.indexOf(node);
                let subNodes = [...nodes];
                subNodes.splice(idx, 1);
                size += this.getLowerSum(subNodes, pathes, node);
            }
            if (lower === -1 || lower > size) {
                lower = size;
            }
        }
        return lower;
    }

    abstract getSizeToOrigin(pathes: Path[], node: Cell);

    parse(input: string): Cell[][] {
        return input.split(/\r?\n/).map((line, y) => {
            return line.split('').map((cell, x) => {
                return new Cell(x, y, cell === '#', cell === '#' || cell === '.' ? undefined : parseInt(cell));
            });
        });
    }
}