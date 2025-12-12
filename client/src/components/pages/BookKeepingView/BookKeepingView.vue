<script setup>
import { ref } from 'vue'
import { formatMoney } from '@/utils/moneyFormatter'
import ActionBar from '@/components/featured/bookkeeping/ActionBar.vue'

import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Badge from 'primevue/badge'

// onMounted(() => {
//     ProductService.getProductsMini().then((data) => (products.value = data));
// });
const columns = [
  { field: 'id', header: 'Entry ID' },
  { field: 'account', header: 'Account' },
  { field: 'item', header: 'Item' },
  { field: 'date', header: 'Date' },
  { field: 'amount', header: 'Amount' },
]
const entries = ref([
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
    amount: { dollar: '300', cent: '34', moneyFlow: 'outgoing' },
  },
  {
    id: 3,
    account: 'Account 3',
    item: 'Item 3',
    date: '2023-01-03',
    amount: { dollar: '341', cent: '35', moneyFlow: 'income' },
  },
])

const stockSeverity = (moneyFlow) => {
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
