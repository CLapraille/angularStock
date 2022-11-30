
export class StockLookup{
    count!: number;
    result!: StockLookupDetail[];
}

export class StockLookupDetail{
    description!: string
    displaySymbol!: string
    symbol!: string
    type!: string
}