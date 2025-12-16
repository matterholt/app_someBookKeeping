import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { formatMoneyString, sumOfTotals } from '@/utils/moneyFormatter'

import type { BookkeepingEntries, WhichEntry } from '@/Types/TransactionEntries'

export const useTransactionsStore = defineStore('transactions', () => {
  const entries = ref(<BookkeepingEntries[]>[
    {
      id: 1,
      account: 'Account 1',
      item: 'Item 1',
      date: '2023-01-01',
      amount: { dollar: '100', cent: '34', moneyFlow: 'income' },
    },
    {
      id: 2,
      account: 'Account 2',
      item: 'Item 2',
      date: '2023-01-02',
      amount: { dollar: '100', cent: '34', moneyFlow: 'outgoing' },
    },
    {
      id: 3,
      account: 'Account 3',
      item: 'Item 3',
      date: '2023-01-03',
      amount: { dollar: '341', cent: '00', moneyFlow: 'income' },
    },
  ])

  const entryTotal = computed(() => {
    return entries.value.reduce((acc, entry) => {
      const amount = parseInt(entry.amount.dollar) + parseInt(entry.amount.cent) / 100
      return acc + (entry.amount.moneyFlow === 'income' ? amount : -amount)
    }, 0)
  })

  function calculateAmounts(whichEntry: WhichEntry) {
    const entryType = entries.value.filter((entry) => entry.amount.moneyFlow === whichEntry)
    return sumOfTotals(entryType)
  }

  function addEntry(account: string, item: string, date: string, amount: number) {
    entries.value.push({
      id: entries.value.length + 1,
      account,
      item,
      date,
      amount: formatMoneyString(amount),
    })
  }
  return { entries, entryTotal, addEntry, calculateAmounts }
})
