<template>
  <Stepper value="1" class="basis-[50rem]">
    <StepItem value="1">
      <Step>Date</Step>
      <StepPanel v-slot="{ activateCallback }" value="1">
        <DatePicker v-model="date" />
        <Button label="Next" @click="activateCallback('2')" />
      </StepPanel>
    </StepItem>

    <StepItem value="2">
      <Step>Account</Step>
      <StepPanel v-slot="{ activateCallback }" value="2">
        <AutoComplete
          placeholder="Select Account"
          v-model="selectedAccount"
          dropdown
          :suggestions="accounts"
          @complete="search"
        />
        <Button label="Back" @click="activateCallback('1')" />
        <Button label="Next" @click="activateCallback('3')" />
      </StepPanel>
    </StepItem>

    <StepItem value="3">
      <Step>Category</Step>
      <StepPanel v-slot="{ activateCallback }" value="3">
        <InputText v-model="transactionCategory" placeholder="Enter Category" />
        <InputText v-model="transactionItem" placeholder="where money going" />
        <Button label="Back" @click="activateCallback('2')" />
        <Button label="Next" @click="activateCallback('4')" />
      </StepPanel>
    </StepItem>

    <StepItem value="4">
      <Step>Amount</Step>
      <StepPanel v-slot="{ activateCallback }" value="4">
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
        <Button label="Back" @click="activateCallback('3')" />
        <Button label="Review" @click="activateCallback('5')" />
      </StepPanel>
    </StepItem>
  </Stepper>
</template>

<script setup lang="ts">
import useFormEntry from './composables/formEntry'

const { addEntry, search, accounts, moneyAmount, transactionItem, date } = useFormEntry()

import DatePicker from 'primevue/datepicker'
import AutoComplete from 'primevue/autocomplete'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'

import Button from 'primevue/button'
import Stepper from 'primevue/stepper'
import StepList from 'primevue/steplist'
import StepPanels from 'primevue/steppanels'
import StepItem from 'primevue/stepitem'
import Step from 'primevue/step'
import StepPanel from 'primevue/steppanel'
</script>
