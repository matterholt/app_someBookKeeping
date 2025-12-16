export type WhichEntry = 'outgoing' | 'income'

export interface TransactionAmount {
  dollar: string
  cent: string
  moneyFlow: WhichEntry
}
export interface BookkeepingEntries {
  id: number
  account: string
  item: string
  date: string
  amount: TransactionAmount
}
