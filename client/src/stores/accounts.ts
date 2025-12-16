import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAccountsStore = defineStore('accounts', () => {
  const userAccounts = ref([
    {
      name: 'account 11',
      isDefault: true,
      id: 1,
    },
    {
      name: 'account 22',
      isDefault: false,
      id: 2,
    },
    {
      name: 'account 33',
      isDefault: false,
      id: 3,
    },
  ])
  const defaultAccount = computed(() => userAccounts.value.find((account) => account.isDefault))

  const accountsNames = computed(() => userAccounts.value.map((account) => account.name))

  function accountAddition(newAccount: string) {
    const newId = userAccounts.value.length + 1
    userAccounts.value.push({ name: newAccount, isDefault: false, id: newId })
  }
  function changeDefaultAccount(accountId: number) {
    userAccounts.value.forEach((account) => {
      account.isDefault = account.id === accountId
    })
  }

  return { accountsNames, changeDefaultAccount, defaultAccount, userAccounts, accountAddition }
})
