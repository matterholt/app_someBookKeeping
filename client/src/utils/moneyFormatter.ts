export function formatMoney(amount: { dollar: string; cent: string; moneyFlow: string }) {
  const dollar = amount.dollar
  const cent = amount.cent
  const moneyFlow = amount.moneyFlow

  const formattedAmount = `${dollar}.${cent}`
  const formattedMoneyFlow = moneyFlow === 'income' ? '+' : '-'

  return `${formattedMoneyFlow}${formattedAmount}`
}
