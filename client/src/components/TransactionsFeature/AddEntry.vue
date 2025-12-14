<script setup lang="ts">
import { ref } from 'vue'
import { useTransactionsStore } from '@/stores/transactions'

import Fieldset from 'primevue/fieldset'

import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import AutoComplete from 'primevue/autocomplete'
import DatePicker from 'primevue/datepicker'

import Message from 'primevue/message'
import Button from 'primevue/button'

const attemptedToSubmit = ref(0)

const date = ref(new Date())
const transactionItem = ref('')
const selectedAccount = ref('')
const moneyAmount = ref(0.0)

const accounts = ref(['account1', 'account2', 'account3'])
const search = (event: any) => {
  const query = event.query
  accounts.value = ['account1', 'account2', 'account3'].filter((account) =>
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
</script>
<template>
  <Fieldset legend="Add Entry">
    <div class="addEntry_layout">
      <div class="entryContainer">
        <DatePicker v-model="date" />
      </div>
      <div class="entryContainer">
        <AutoComplete
          placeholder="Select Account"
          v-model="selectedAccount"
          dropdown
          :suggestions="accounts"
          @complete="search"
        />

        <Message
          v-show="!transactionItem && attemptedToSubmit > 0"
          severity="error"
          variant="simple"
          size="small"
          >Account is required</Message
        >
      </div>
      <div class="entryContainer">
        <InputText v-model="transactionItem" placeholder="where money going" />

        <Message
          v-show="!transactionItem && attemptedToSubmit > 0"
          severity="error"
          variant="simple"
          size="small"
          >Item description is required</Message
        >
      </div>

      <div class="entryContainer">
        <InputNumber
          v-model="moneyAmount"
          inputId="horizontal-buttons"
          showButtons
          buttonLayout="horizontal"
          :step="0.25"
          mode="currency"
          currency="USD"
          fluid
        >
        </InputNumber>
      </div>
      <div class="entryContainer">
        <Button label="Submit" @click="addEntry" />
      </div>
    </div>
  </Fieldset>
</template>
<style>
.addEntry_layout {
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: 50%;
  width: 650px;
  gap: 20px;
}
.entryContainer {
  display: flex;
  flex-direction: column;
}
</style>
