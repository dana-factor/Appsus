export default {
	props: ['note'],
	template: `
          <section>
                <input type=color v-model="noteBackgroundColor" @change="onBackgroundColorChange"/>
                <input type=color v-model="noteTextColor" @change="onTextColorChange"/>
				<button @click="onToggleTitle">Toggle Title</button>
				<button @click="onDeleteNote">Delete</button>
          </section>
          `,
	data() {
		return {
			noteBackgroundColor: this.note.style.backgroundColor,
			noteTextColor: this.note.style.color,
		};
	},
	methods: {
		onBackgroundColorChange() {
			this.note.style.backgroundColor = this.noteBackgroundColor;
		},
		onTextColorChange() {
			this.note.style.color = this.noteTextColor;
		},
		onToggleTitle() {
			if (this.note.info.title) this.note.info.title = null;
			else this.note.info.title = ' ';
		},
		onDeleteNote(){
			
		}
	},
};
