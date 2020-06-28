export default {
	props: ['note', 'isNewNote'],
	template: `
	<div>
          <!-- <fieldset> -->
			  <!-- <legend>Properties</legend> -->
			  	<button class="color-button fas fa-palette fa-lg">
					<input type="color" v-model="noteBackgroundColor" @change="onBackgroundColorChange"/>
				</button>
				<button class="color-button fas fa-paint-brush fa-lg">
				<input type="color" v-model="noteTextColor" @change="onTextColorChange"/>
				</button>
				<!-- <button @click="onToggleTitle">Toggle Title</button> -->
				<button v-if="!isNewNote" @click="onDeleteNote" class="fas fa-trash fa-lg"></button>
		  <!-- </fieldset> -->
</div>
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
