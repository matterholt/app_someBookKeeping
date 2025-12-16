<script lang="ts" setup>
import { useTransactionsStore } from '@/stores/transactions'

const totals = useTransactionsStore().entryTotal
const totalExpenses = useTransactionsStore().calculateAmounts('outgoing')
const totalIncome = useTransactionsStore().calculateAmounts('income')
</script>

<template>
  <header>
    <h2>Current State of finance</h2>
    <div>total: {{ totals }}</div>
    <p>Outgoing: {{ totalExpenses }}</p>
    <p>InCome: {{ totalIncome }}</p>
  </header>
</template>
