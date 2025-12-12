export function formatMoney(amount: { dollar: string; cent: string; moneyFlow: string }) {
  return `${amount.moneyFlow === 'income' ? '+' : '-'}${amount.dollar}.${amount.cent}`
}
