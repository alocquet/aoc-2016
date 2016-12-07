import * as fs from 'graceful-fs';

export class FileLoader {
    readFile(filename: string): Promise<string> {
        return new Promise<String>((resolve, reject) => {
            fs.readFile(filename, 'utf-8', function (err, res) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
    }
}