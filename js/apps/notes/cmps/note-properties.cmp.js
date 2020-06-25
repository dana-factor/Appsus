export default {
	props: ['note'],
	template: `
          <section>
                <input type=color v-model="noteColor" @change="onChange"/>
          </section>
          `,
	data() {
		return {
			noteColor: this.note.style.backgroundColor,
		};
	},
	created() {
		if (!this.note.style) this.note.style = {}; //temp, should be on note creation
	},
	methods: {
		onChange() {
			this.note.style.backgroundColor = this.noteColor;
			this.$emit('updateNote', this.note);
		},
	},
};
