<template>
  <div class="todo">
    <div class="todo__form">
      <Form
        :placeholderTask="placeholderTask"
        :buttonName="buttonName"
        :inputCompBody="inputTaskBody"
        @update:inputCompBody="handleInputTaskBody"
        @handleSubmit="handleSubmit"
        @handleEnter="handleEnter"
      />
    </div>
    <div
      class="todo__list"
    >
      <div
        class="todo__list-empty"
        v-if="storeTodo.todos.length < 1"
      >
         <p>Your todo list is empty</p>
      </div>
      <div
        class="todo__list-full"
        v-else
      >
        <todo-item
          v-for="todo in storeTodo.todos"
          :key="todo.id"
          :todoId="todo.id"
          :todoItemBody="todo.body"
          :boxChecked="todo.boxChecked"
          @deleteTodoItem="deleteTodoItem(todo.id)"
          @toggleCheckBox="handleCheckBox(todo.id)"
          @editTodoItem="handleEditTodoItem"
        />
      </div>
    </div>
  </div>

</template>

<script setup>
  import { ref } from 'vue';
  import { useTodoItemsStore } from '../stores/todosStore.js'
  import Form from "../components/FormComponent.vue"
  import TodoItem from "../components/TodoItem.vue"

  const placeholderTask = ref('Enter your task');
  const inputTaskBody = ref('');
  const buttonName = ref('Create task');
  const storeTodo = useTodoItemsStore();

  function handleInputTaskBody(val)
  {
    inputTaskBody.value = val;
  }

  function handleEnter()
  {
    storeTodo.addTodo(inputTaskBody.value);
    inputTaskBody.value = '';

  }
  function handleSubmit()
  {
    storeTodo.addTodo(inputTaskBody.value);
    inputTaskBody.value = '';
  }
  function deleteTodoItem(id)
  {
    storeTodo.removeTodo(id);
  }
  function handleCheckBox(id)
  {
    storeTodo.updateTodoCheckbox(id)
  }
  function handleEditTodoItem(id, newValue)
  {
    storeTodo.editTodoItem(id, newValue)
  }
</script>

<style scoped>
.todo__list
{
  border: 2px solid #b1dbe9;
  border-radius: 5px;
  padding: 10px;
}
.todo__list-full
{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.todo__form
{
  display: flex;
  justify-content: center;
  border: 2px solid #b1dbe9;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 10px;
}
</style>
