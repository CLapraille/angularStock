export class StockSentiment {
    data!: StockSentimentInfo[]
    symbol!: string
}

export class StockSentimentInfo{
    symbol!: string
    year!: number
    month!: number
    change!: number
    mspr!: number
}