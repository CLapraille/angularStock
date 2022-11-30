import { StockQuote } from "./stock-quote.model";

export class ManagedStock{
    description!: string;
    symbol!: string;

    stockQuote!: StockQuote;

    public constructor(init?:Partial<ManagedStock>) {
        Object.assign(this, init);
    }
}