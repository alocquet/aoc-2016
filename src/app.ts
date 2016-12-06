import { Day1Step1 } from './day-01/step-1';
import { Day1Step2 } from './day-01/step-2';
import { Day } from './day';

class Main {
    run(): void{
        let day: Day<any>;
        switch (process.argv[2]) {
            case 'day-01-s1': day = new Day1Step1(); break;
            case 'day-01-s2': day = new Day1Step2(); break;
            default: break;
        }
        day.run().then(this.display);
    }
    display(res): void{
        console.log(res);
    }
}
new Main().run();