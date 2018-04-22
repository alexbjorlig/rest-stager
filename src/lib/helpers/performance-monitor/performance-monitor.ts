import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { filter, take } from 'rxjs/operators';
import { convertBytesToMB } from '../utils';
import * as fs from 'fs';
import { EOL } from 'os';

/**
 * The purpose of this class is to help monitor performance.
 * @export
 * @class PerformanceMonitor
 */
export class PerformanceMonitor {
    private currentlyWorking: BehaviorSubject<boolean> = new BehaviorSubject(false);
    private memoryUsage: Subject<{rss: number; heapTotal: number; heapUsed: number}> = new Subject();
    private continueMonitorPerformance = true;
    private writeStream: fs.WriteStream;

    /**
     * Simple function to start performance measure
     * @memberof PerformanceMonitor
     */
    public start(): void {
        this.writeStream = fs.createWriteStream('performance-log.csv');
        this.writeStream.write(`captureTime,residentSetSize,heapTotal,heapUsed${EOL}`);
        this.monitorMemoryPerformance();
    }

    /**
     * Call this function to end the performance monitor, and close the file.
     * @returns {Promise<void>}
     * @memberof PerformanceMonitor
     */
    public async end(): Promise<void> {
        this.continueMonitorPerformance = false;
        await this.currentlyWorking.pipe(
            filter((v) => v === false),
            take(1)
        ).toPromise();
        this.writeStream.close();
        this.writeStream.on('close', () => {
            return;
        });
    }

    /**
     * This function captures current memory usage from the nodejs process,
     * and writes the information to a file.
     * @private
     * @memberof PerformanceMonitor
     */
    private monitorMemoryPerformance(): void {
        const processUsage: NodeJS.MemoryUsage = process.memoryUsage();
        const rss = convertBytesToMB(processUsage.rss);
        const heapTotal = convertBytesToMB(processUsage.heapTotal);
        const heapUsed = convertBytesToMB(processUsage.heapUsed);
        process.stdout.write('heapUsed ' + heapUsed + ' bytes\r');
        process.stdout.write('rss ' + rss + ' bytes\r');
        this.memoryUsage.next({rss, heapTotal, heapUsed});
        if (this.continueMonitorPerformance === true) {
            setTimeout(() => this.monitorMemoryPerformance(), 1000);
        }
    }

    // private updateAverageValues(): void {

    // }
}
