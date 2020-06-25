export default {
	props: ['note'],
	template: `
          <section>
                <input type=color v-model="noteBackgroundColor" @change="onBackgroundColorChange"/>
                <input type=color v-model="noteTextColor" @change="onTextColorChange"/>
                <button @click="toggleTitle">Toggle Title</button>
          </section>
          `,
	data() {
		return {
			noteBackgroundColor: this.note.style.backgroundColor,
			noteTextColor: this.note.style.color,
		};
	},
	created() {
		if (!this.note.style) this.note.style = {}; //temp, should be on note creation
	},
	methods: {
		onBackgroundColorChange() {
			this.note.style.backgroundColor = this.noteBackgroundColor;
		},
		onTextColorChange() {
			this.note.style.color = this.noteTextColor;
		},
		toggleTitle() {
			if (this.note.info.title) this.note.info.title = null;
			else this.note.info.title = ' ';
		},
	},
};
