import { ref } from 'vue'
import { useTransactionsStore } from '@/stores/transactions'
import { useAccountsStore } from '@/stores/accounts'

export function useFormEntry() {
  const attemptedToSubmit = ref(0)

  const date = ref(new Date())
  const transactionItem = ref('')
  const selectedAccount = ref('')
  const moneyAmount = ref(0.0)
  const accounts = ref([])

  const search = (event: any) => {
    const query = event.query
    accounts.value = [...useAccountsStore().accountsNames].filter((account) =>
      account.toLowerCase().startsWith(query.toLowerCase()),
    )
  }
  function resetForm() {
    transactionItem.value = ''
    date.value = new Date()
    selectedAccount.value = ''
    moneyAmount.value = 0.0
  }
  function addEntry() {
    const account = selectedAccount.value
    const entryItem = transactionItem.value
    const entryDate = date.value.toLocaleDateString()
    const amount = moneyAmount.value

    if ([account, entryItem, entryDate].every((x) => x !== '') && amount !== 0.0) {
      attemptedToSubmit.value = 0
      resetForm()
      useTransactionsStore().addEntry(account, entryItem, entryDate, amount)
    } else {
      attemptedToSubmit.value++
    }
  }

  return {
    addEntry,
    search,
    accounts,
    moneyAmount,
    transactionItem,
    date,
  }
}
