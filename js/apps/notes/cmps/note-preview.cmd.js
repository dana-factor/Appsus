import noteText from './note-text.cmp.js';
import noteImg from './‏‏note-img.cmp.js';
import noteTodos from './‏‏note-todos.cmp.js';
import noteVideo from './‏‏‏‏note-video.cmp.js';
import noteProperties from './note-properties.cmp.js';

export default {
	props: ['note'],
	template: `
            <li class="note-preview flex column align-center space-between" :style="note.style">
                    <h3 v-if="note.info.title" :contenteditable="isEdit" @input="onInputTitle">{{title}}</h3>
                    <component :is="note.type" :note="note" :info="note.info" :isEdit="isEdit"></component>
					<note-properties v-if="isEdit" :note="note"></note-properties>
					<button @click="isEdit=!isEdit">{{isEdit?'Save':'Edit'}}</button>
            </li>
	`,
	data() {
		return {
			isEdit: false,
			title: this.note.info.title,
		};
	},
	watch: {
		isEdit(isEdit) {
			if (!isEdit) this.updateNote();
		},
	},
	methods: {
		onInputTitle(e) {
			this.note.info.title = e.target.innerText;
		},
		updateNote() {
			this.$emit('updateNote', this.note);
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
