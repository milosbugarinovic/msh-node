export type InitCallbackFunction = () => Promise<void>

export abstract class Initiable {
  private __preInitFn: InitCallbackFunction[] = []
  private __postInitFn: InitCallbackFunction[] = []
  private async __preInit(): Promise<void> {
    for (const fn of this.__preInitFn) await fn()
  }

  private async __postInit(): Promise<void> {
    for (const fn of this.__postInitFn) await fn()
  }

  protected abstract _init(): Promise<void>
  public async initiate(): Promise<void> {
    await this.__preInit()
    await this._init()
    await this.__postInit()
  }

  public onPreInit(cb: InitCallbackFunction): void {
    this.__preInitFn.push(cb)
  }
  public onPostInit(cb: InitCallbackFunction): void {
    this.__postInitFn.push(cb)
  }

  public abstract destroy(): Promise<void>
}
