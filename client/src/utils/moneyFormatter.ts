import type { BookkeepingEntries, TransactionAmount } from '@/Types/TransactionEntries'

export function formatMoney(amount: { dollar: string; cent: string; moneyFlow: string }) {
  return `${amount.moneyFlow === 'income' ? '+' : '-'}${amount.dollar}.${amount.cent}`
}
// .toLocaleString("en-US", {style:"currency", currency:"USD"});
export function formatMoneyString(entryAmount: number): TransactionAmount {
  const [dollar = '0', cent = '00'] = entryAmount.toString().split('.')

  const formattedDollar = String(dollar !== '0' ? Number(dollar) * -1 : 0)
  const formattedCent = cent?.padEnd(2, '0')

  if (entryAmount < 0) {
    return {
      dollar: formattedDollar,
      cent: formattedCent,
      moneyFlow: 'outgoing',
    }
  }
  return {
    dollar: dollar,
    cent: formattedCent,
    moneyFlow: 'income',
  }
}

export function sumOfTotals(entries: BookkeepingEntries[]) {
  const totals = entries.reduce((acc, entry) => {
    const amount = parseInt(entry.amount.dollar) + parseInt(entry.amount.cent) / 100
    return acc + amount
  }, 0)
  return totals.toFixed(2)
}
