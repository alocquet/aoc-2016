import { RequestProcessor, Request, Response } from './day-14';
import * as cluster from 'cluster';
import { cpus } from 'os';

const numCPUs = cpus().length;

if (cluster.isMaster) {
    let workers = [];
    let keys = [];
    let time = new Date().getTime();
    for (let i = 0; i < numCPUs; i++) {
        let worker = cluster.fork({ id: i, range: 100, step: numCPUs, salt: 'cuanljph' });
        workers.push(worker);
        worker.on('message', (response: Response) => {
            keys.push(response.keys);
            if (keys.reduce((sum, proc) => sum + proc.length, 0) < 70) {
                worker.send('next');
            } else {
                worker.destroy();
            }
        }).send('next');
    }
    cluster.on('exit', (worker, code, signal) => {
        if (workers.every(worker => worker.isDead())) {
            console.log(keys.reduce((all, step) => all.concat(step), []).sort((a, b) => a - b)[63]);
            console.log('in ' + (new Date().getTime() - time) + ' ms');
        }
    });
} else {
    let processor = new RequestProcessor();
    let id = parseInt(process.env.id);
    let range = parseInt(process.env.range);
    let step = parseInt(process.env.step);
    let salt = process.env.salt;
    let idx = 0;
    process.on('message', request => {
        process.send(processor.process(new Request((id + step * idx++) * range, range, salt, 2016)));
    });
}
