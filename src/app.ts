import { Initiable } from './initiable'

export class App {
  private __initList: Initiable[]
  constructor(...args: Initiable[]) {
    this.__initList = args
  }
  public async initiate(): Promise<void> {
    await Promise.all(this.__initList.map(init => init.initiate()))
  }
}
