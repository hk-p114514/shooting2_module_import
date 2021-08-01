class ItemMaster {
  itemNumber: number;
  r: number;
  fileNumber: number;
  functionNumber: number;
  constructor(
    itemNumber: number,
    r: number,
    fileNumber: number,
    functionNumber?: number
  ) {
    this.itemNumber = itemNumber;
    this.r = r;
    this.fileNumber = fileNumber;
    this.functionNumber = functionNumber || 0;
  }

  public getItemNumber = (): number => {
    return this.itemNumber;
  };
}

export { ItemMaster };
