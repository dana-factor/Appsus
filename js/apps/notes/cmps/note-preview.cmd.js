import noteText from './note-text.cmp.js';
import noteImg from './‏‏note-img.cmp.js';
import noteTodos from './‏‏note-todos.cmp.js';
import noteVideo from './‏‏‏‏note-video.cmp.js';
import noteProperties from './note-properties.cmp.js';

export default {
	props: ['note'],
	template: `
            <li class="note-preview flex column align-center space-around" :style="note.style">
                    <h3 :contenteditable="isEdit" v-if="note.info.title" @input="onInputTitle">{{note.info.title}}</h3>
                    <component :is="note.type" :note="note" :info="note.info" :isEdit="isEdit"></component>
					<noteProperties :note="note" v-if="isEdit"></noteProperties>
					<button @click="isEdit=!isEdit">{{isEdit?'Done':'Edit'}}</button>
            </li>
	`,
	data() {
		return {
			isEdit: false,
		};
	},
	watch: {
		isEdit(isEdit) {
			if (!isEdit) this.updateNote(this.note);
		},
	},
	methods: {
		onInputTitle(e) {
			this.note.info.title = e.target.innerText;
		},
		updateNote(note) {
			// console.log('saving',note)
			this.$emit('updateNote', note);
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
