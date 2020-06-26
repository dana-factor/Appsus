import noteText from './note-text.cmp.js';
import noteImg from './‏‏note-img.cmp.js';
import noteTodos from './‏‏note-todos.cmp.js';
import noteVideo from './‏‏‏‏note-video.cmp.js';
import noteProperties from './note-properties.cmp.js';

export default {
	props: ['note', 'isNewNote'],
	template: `
            <li class="note-preview flex column align-center space-between" :style="note.style">
                    <h3 v-if="note.info.title" :contenteditable="isEdit" @input="onInputTitle" placeholder="title">{{title}}</h3>
                    <component :is="note.type" :note="note" :info="note.info" :isEdit="isEdit"></component>
					<note-properties v-if="isEdit" :note="note"></note-properties>
					<button @click="onButtonClick">{{doneButtonText}}</button>
            </li>
	`,
	data() {
		return {
			isEdit: false,
			title: this.note.info.title,
		};
	},
	created() {
		if (this.isNewNote) this.isEdit = true;
	},
	computed: {
		doneButtonText() {
			if (this.isNewNote) return 'Add';
			return this.isEdit ? 'Save' : 'Edit';
		},
	},
	methods: {
		onInputTitle(e) {
			this.note.info.title = e.target.innerText;
		},
		updateNote() {
			this.$emit('updateNote', this.note);
		},
		onButtonClick() {
			if (this.isNewNote) {
				this.updateNote();
			} else {
				this.isEdit = !this.isEdit;
				if (!this.isEdit) this.updateNote();
			}
		},
	},
	components: {
		noteText,
		noteImg,
		noteTodos,
		noteVideo,
		noteProperties,
	},
};
