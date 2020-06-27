export default {
	props: ['note'],
	template: `
          <fieldset>
			  <legend>Properties</legend>
                <input type=color v-model="noteBackgroundColor" @change="onBackgroundColorChange"/>
                <input type=color v-model="noteTextColor" @change="onTextColorChange"/>
				<!-- <button @click="onToggleTitle">Toggle Title</button> -->
				<button @click="onDeleteNote">Delete</button>
          </fieldset>
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
			if (this.note.info.title || this.note.info.title === '') this.note.info.title = null;
			else this.note.info.title = '';
		},
		onDeleteNote() {
			this.$emit('deleteNote');
		},
	},
};
