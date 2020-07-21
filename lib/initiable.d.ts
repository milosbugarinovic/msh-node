export declare type InitCallbackFunction = () => Promise<void>;
export declare abstract class Initiable {
    private __preInitFn;
    private __postInitFn;
    private __preInit;
    private __postInit;
    protected abstract _init(): Promise<void>;
    initiate(): Promise<void>;
    onPreInit(cb: InitCallbackFunction): void;
    onPostInit(cb: InitCallbackFunction): void;
    abstract destroy(): Promise<void>;
}
