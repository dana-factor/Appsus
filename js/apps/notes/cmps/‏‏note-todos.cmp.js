export default {
	props: ['info'],
	template: `
            <section class="note-todo">
              <div v-for="(todo, idx) in info.todos">
                  <label :class="{done:todo.doneAt}">
                    <input type="checkbox" :checked="todo.doneAt">{{todo.text}}
                  </label>
              </div>
            </section>
          `,
	computed: {},
	methods: {},
};
