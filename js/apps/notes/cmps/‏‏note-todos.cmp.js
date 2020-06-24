export default {
	props: ['info'],
	template: `
            <ul class="note-todo">
                <li v-for="(todo, idx) in info.todos" :class="{done:todo.doneAt}">{{todo.text}}</li>
            </ul>
          `,
	computed: {},
	methods: {},
};
