<template>
	<div
		:class="[boxChecked ? 'todo-item--grey' : 'todo-item']"
	>
		<input-comp
			:labelForInput="'Done'"
			:type="'checkbox'"
			:itemId="todoId"
			:boxChecked="props.boxChecked"
			@toggleCheckBox="$emit('toggleCheckBox',todoId)"
		/>
		<div class="todo-item__body">
			<template v-if="isEditing">
				<input
					class="todo-item__input-edit"
					:value="todoItemBody"
					@input="updateEditText"
				/>
			</template>
			<template v-else>
				<p>{{ props.todoItemBody }}</p>
			</template>
		</div>
		<div class="todo-item__btn-wr">
			<button
				@click="isEditing ? saveEdit() : toggleEdit()"
			>
				{{ isEditing ? 'Save task' : 'Edit task' }}
			</button>
			<button
				@click="$emit('deleteTodoItem', todoId)"
			>
				Delete task
			</button>
		</div>
	</div>
</template>

<script setup>
	import { defineProps, ref, defineEmits } from 'vue'
	import InputComp from "@/components/InputComponent.vue"
	const props = defineProps([
		'todoItemBody',
		'todoId',
		'boxChecked',
	]);

	const isEditing = ref(false);
	const editText = ref(props.todoItemBody);

	function toggleEdit() {
		isEditing.value = !isEditing.value;
	}

	function updateEditText(event)
	{
		editText.value = event.target.value;
	}

	const emit = defineEmits(['editTodoItem'])
	function saveEdit() {
		emit('editTodoItem', props.todoId, editText.value);
		isEditing.value = !isEditing.value;
	}
</script>

<style scoped lang="scss">
.todo-item
{
	width: 80%;
	display: flex;
	background-color: #dcf0ee;
	margin-bottom: 10px;
	padding: 5px;

	&--grey
	{
		width: 80%;
		display: flex;
		background-color: grey;
		margin-bottom: 10px;
		padding: 5px;
	}
	& button
	{
		align-self: flex-end;
	}
}
.todo-item__body {
  flex: 1;
  border: 1px solid #bca9f5;
  margin-right:10px;
}
.todo-item__btn-wr
{
	& :not(:last-child)
	{
		margin-right: 10px;
	}
}
.todo-item__input-edit
{
	width: 100%;
}
</style>