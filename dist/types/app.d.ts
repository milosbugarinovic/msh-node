import { Initiable } from './initiable';
export declare class App {
    private __initList;
    constructor(...args: Initiable[]);
    initiate(): Promise<void>;
}
