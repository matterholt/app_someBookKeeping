<script setup lang="ts">
import { ref } from 'vue'

import { useTransactionsStore } from '@/stores/transactions'
import Button from 'primevue/button'

import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import IftaLabel from 'primevue/iftalabel'
import AutoComplete from 'primevue/autocomplete'
import DatePicker from 'primevue/datepicker'

const transactionItem = ref('')
const date = ref(new Date())
const moneyAmount = ref('-100.00')
const selectedAccount = ref('')
const value3 = ref(-1000)

const accounts = ref(['account1', 'account2', 'account3'])
const search = (event: any) => {
  const query = event.query
  accounts.value = ['account1', 'account2', 'account3'].filter((account) =>
    account.toLowerCase().startsWith(query.toLowerCase()),
  )
}

function addEntry() {
  const account = selectedAccount.value
  const entryItem = transactionItem.value
  const entryDate = date.value.toLocaleDateString()

  const amount = {
    dollar: moneyAmount.value.toString(),
    cent: '00',
    moneyFlow: 'income',
  }

  console.log('ADDING ENTERy')
  console.log(moneyAmount.value)
  useTransactionsStore().addEntry(account, entryItem, entryDate, amount)
}
</script>
<template>
  <div class="flex">
    <DatePicker v-model="date" />
    <AutoComplete
      placeholder="Select Account"
      v-model="selectedAccount"
      dropdown
      :suggestions="accounts"
      @complete="search"
    />
    <InputText v-model="transactionItem" placeholder="where money going" />
    <IftaLabel>
      <InputNumber
        v-model="moneyAmount"
        inputId="price"
        mode="currency"
        currency="USD"
        locale="en-US"
      />
      <label for="price">Price</label>
    </IftaLabel>

    <InputNumber
      v-model="value3"
      inputId="horizontal-buttons"
      showButtons
      buttonLayout="horizontal"
      :step="0.25"
      mode="currency"
      currency="USD"
      fluid
    >
      <template #incrementbuttonicon>
        <span class="pi pi-plus" />
      </template>
      <template #decrementbuttonicon>
        <span class="pi pi-minus" />
      </template>
    </InputNumber>

    <Button label="Submit" @click="addEntry" />
  </div>
</template>
