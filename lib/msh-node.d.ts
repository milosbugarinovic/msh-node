import { Initiable } from './initiable';
export declare class MshNode {
    private __initList;
    constructor(...args: Initiable[]);
    initiate(): Promise<void>;
}
