import noteText from './note-text.cmp.js';
import noteImg from './‏‏note-img.cmp.js';
import noteTodos from './‏‏note-todos.cmp.js';
import noteVideo from './‏‏‏‏note-video.cmp.js';
import noteProperties from './note-properties.cmp.js';

export default {
	props: ['note'],
	template: `
            <li class="note-preview flex column align-center space-around" :style="note.style">
                    <h3 v-if="note.info.title" :contenteditable="isEdit" @input="onInputTitle">{{title}}</h3>
                    <component :is="note.type" :note="note" :info="note.info" :isEdit="isEdit"></component>
					<note-properties v-if="isEdit" :note="note"></note-properties>
					<button @click="isEdit=!isEdit">{{isEdit?'Done':'Edit'}}</button>
            </li>
	`,
	data() {
		return {
			isEdit: false,
			title: this.note.info.title,
		};
	},
	created(){
		console.log(this.note.info);
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
			// this.infoToUpdate = Object.assign(this.infoToUpdate, info);
			this.$emit('updateNote', this.note);
		},
		// doneEditing(){
		// 	let noteToUpdate = {...this.note};
		// 	noteToUpdate.info = this.infoToUpdate;
		// 	this.$emit('updateNote', this.note, this.infoToUpdate);
		// }
	},
	components: {
		noteText,
		noteImg,
		noteTodos,
		noteVideo,
		noteProperties,
	},
};
