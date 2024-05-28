<template>
  <form @submit.prevent="$emit('handleSubmit')">
		<input-comp
			:type="inputText"
			:placeholder="props.placeholderTask"
			:value="props.inputCompBody"
			@update:value="$emit('update:inputCompBody', $event)"
			@handleEnter="$emit('handleEnter')"
		/>
		<button>{{ props.buttonName }}</button>
  </form>

</template>

<script setup>
import InputComp from "@/components/InputComponent.vue"
import { defineProps, ref } from 'vue'
const props = defineProps([
	'placeholderTask',
	'inputCompBody',
	'buttonName',
])

const inputText = ref('text')
</script>

<style scoped lang="scss">
form
{
	display: flex;
	width: 50%;

	& .input
	{
		// width: 100%;
		flex: 1;
	}
}
</style>
