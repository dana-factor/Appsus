export default {
	props: ['info', 'note'],
	template: `
            <section class="note-todo">
              <div v-for="(todo, idx) in sortedTodos">
                  <label>
                    {{!!todo.doneAt}}
                    <input type="checkbox" :checked="todo.doneAt!==null" @change="onDoneToggle(todo)">{{todo.text}}
                  </label>
              </div>
            </section>
          `,
	computed: {
		sortedTodos() {
			return this.info.todos.sort((todo1, todo2) => {
				return todo1.doneAt > todo2.doneAt;
			});
		},
	},
	methods: {
		onDoneToggle(todo) {//should be in service :(
			if (todo.doneAt) todo.doneAt = null;
      else todo.doneAt = Date.now();
      console.log(this.info.todos)
		},
	},
};
