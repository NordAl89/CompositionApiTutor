import { defineStore } from 'pinia'
import { ref, onMounted} from 'vue'

export const useTodoItemsStore = defineStore('todos', () => {
	const todos = ref([]);

	function addTodo(todoBody) {
		const trimmedTodoBody = todoBody.trim();
		console.log(trimmedTodoBody);
		//в консоль значение инпута выводится. трим работает
		if (trimmedTodoBody) {
			const unicId = Math.floor(Math.random() * 100000).toString();
			todos.value.push({ id: unicId, body: trimmedTodoBody, boxChecked: false });
			saveTodos();
		}
	}

	function removeTodo(id) {
		todos.value = todos.value.filter(todo => todo.id !== id);
		saveTodos();
	}
	function updateTodoCheckbox(id) {
		todos.value = todos.value.map(todo =>{
			if(todo.id == id){
				todo.boxChecked = !todo.boxChecked;
			}
			return todo;
	});
		saveTodos();
	}
	function editTodoItem(id, value) {
		todos.value = todos.value.map(todo =>{
			if(todo.id == id){
				todo.body = value;
			}
			return todo;
	});
		saveTodos();
	}

	function saveTodos() {
		localStorage.setItem('todos', JSON.stringify(todos.value));

	}

	onMounted(() => {
		const savedTodos = localStorage.getItem('todos');
		if (savedTodos) {
			todos.value = JSON.parse(savedTodos);
		}
	});

	return { todos, addTodo, removeTodo, updateTodoCheckbox, editTodoItem };
});