export default {
	props: ['info'],
	template: `
            <ul class="note-todo clean-list">
				<li v-for="(todo, idx) in sortedTodos">
					<label>
					<!-- {{checked[idx]}} -->
					<input type="checkbox" v-model="checked[idx]" @change="onDoneToggle(todo)">{{todo.text}}
					</label>
				</li>
            </ul>
		  `,
	data() {
		return {
			checked: {},
		};
	},
	created() {
		this.info.todos.forEach((todo, idx) => (this.checked[idx] = !!todo.doneAt));
	},
	computed: {
		sortedTodos() {
			return this.info.todos.sort((todo1, todo2) => {
				// if (!todo1.doneAt) {
				// 	if (!todo2.doneAt) return 0;
				// 	else return -1;
				// } else if (!todo2.doneAt) {
				// 	return 1;
				// }
				return todo1.doneAt > todo2.doneAt;
			});
		},
	},
	methods: {
		onDoneToggle(todo) {
			//should be in service :(
			console.log('b', todo.doneAt);
			if (todo.doneAt) todo.doneAt = null;
			else todo.doneAt = Date.now();
			console.log('a', todo.doneAt);
		},
	},
};
