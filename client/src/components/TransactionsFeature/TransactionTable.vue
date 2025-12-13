<script setup lang="ts">
import { useTransactionsStore } from '@/stores/transactions'

import { ref } from 'vue'
import { formatMoney } from '@/utils/moneyFormatter'

import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Badge from 'primevue/badge'

const columns = [
  { field: 'id', header: 'Entry ID' },
  { field: 'account', header: 'Account' },
  { field: 'date', header: 'Date' },
  { field: 'item', header: 'Item' },
  { field: 'amount', header: 'Amount' },
]
const transactions = useTransactionsStore()
const entries = transactions.entries

const stockSeverity = (moneyFlow: string): string => {
  if (moneyFlow === 'outgoing') return 'danger'
  return 'success'
}
</script>

<template>
  <ActionBar />
  <DataTable :value="entries" tableStyle="min-width: 50rem">
    <Column v-for="col of columns" :key="col.id" :field="col.field" :header="col.header">
      <template v-if="col.field === 'amount'" #body="slotProps">
        <Badge
          :value="formatMoney(slotProps.data.amount)"
          :severity="stockSeverity(slotProps.data.amount.moneyFlow)"
        />
      </template>
    </Column>
  </DataTable>
</template>

<style scoped></style>
