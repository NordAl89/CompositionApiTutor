<template>
  <div class="input">
    <label for="input">
      {{ labelForInput }}
    </label>
    <input
      id="input"
      class="input__inp"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      :checked="props.boxChecked"
      @change="$emit('toggleCheckBox')"
      @input="$emit('update:value', $event.target.value)"
      @keyup.enter="$emit('handleEnter')"
    >
  </div>

</template>

<script setup>
import { defineProps, } from 'vue'

const props = defineProps([
  'value',
  'placeholder',
  'type',
  'boxChecked',
  'labelForInput'
])
</script>

<style scoped lang="scss">
.input
{
  display: flex;
	margin-right: 10px;
	& input
	{
		width: 100%;
	}
}
</style>
