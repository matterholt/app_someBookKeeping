<script setup lang="ts">
import { FormStep, FinanceState, TransactionTable, AddEntry } from '@/features/TransactionsFeature'
</script>
<template>
  <main>
    <FinanceState />
    <FormStep />
    <TransactionTable />
  </main>
</template>
