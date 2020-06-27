export default {
	props: ['info', 'isEdit', 'isNewNote'],
	template: `
            <ul class="note-todo clean-list">
				<li v-for="todo in sortedTodos" :key="todo.id">
					<label class="checkbox-label">
					<!-- {{todo.isDone}} -->
					<input type="checkbox" v-model="todo.isDone" :disabled="isNewNote" @change="onDoneToggle">{{todo.text}}
					</label>
				</li>
				<li v-if="isEdit">
					<input type="text" v-model="newLineText" placeholder="Enter new todo"><button @click="onAddTodo">Add todo</button>
				</li>
            </ul>
		  `,
	data() {
		return {
			newLineText: '',
		};
	},
	created() {
		if (!this.info.todos) this.info.todos = [];
	},
	computed: {
		sortedTodos() {
			return this.info.todos;
			// return this.info.todos.sort((todo1, todo2) => {
			// 	return todo1.isDone === todo2.isDone ? 0 : todo2.isDone ? -1 : 1;
			// });
		},
	},
	methods: {
		onDoneToggle() {
			this.$emit('updateNote');
		},
		onAddTodo() {
			if (this.newLineText.trim() === '') return;
			this.info.todos.push({ text: this.newLineText, isDone: false });//id?
			this.newLineText = '';
			console.log(this.info.todos);
			if (!this.isNewNote) this.$emit('updateNote');
		},
	},
};
