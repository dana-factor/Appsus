import noteText from './note-text.cmp.js';
import noteImg from './‏‏note-img.cmp.js';
import noteTodos from './‏‏note-todos.cmp.js';
import noteVideo from './‏‏‏‏note-video.cmp.js';
import noteProperties from './note-properties.cmp.js';

export default {
	props: ['note', 'isNewNote'],
	template: `
            <li class="note-preview flex column align-center space-between" :style="note.style">
			<button @click="onPinNote">{{note.isPinned ? 'Pin': 'Unpin'}}</button>
					<div v-if="isNewNote">
						<button @click="$emit('createNewNoteOfType','noteText')">Text</button>
						<button @click="$emit('createNewNoteOfType','noteImg')">Image</button>
						<button @click="$emit('createNewNoteOfType','noteVideo')">Video</button>
						<button @click="$emit('createNewNoteOfType','noteTodos')">Todo</button>
					</div>
                    <h3 v-if="note.info.title || note.info.title === ''" :contenteditable="isEdit" @input="onInputTitle" placeholder="title">{{title}}</h3>
                    <component :is="note.type" :note="note" :isNewNote="isNewNote" :info="note.info" :isEdit="isEdit" @updateNote="updateNote"></component>
					<note-properties v-if="isEdit" :note="note" @deleteNote="deleteNote"></note-properties>
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
		onPinNote() {
			this.note.isPinned = !this.note.isPinned;
			this.updateNote();
		},
		onInputTitle(e) {
			this.note.info.title = e.target.innerText;
		},
		onButtonClick() {
			if (this.isNewNote) {
				this.updateNote();
				this.$emit('createNewNoteOfType', this.note.type);
			} else {
				this.isEdit = !this.isEdit;
				if (!this.isEdit) this.updateNote();
			}
		},
		updateNote() {
			this.$emit('updateNote', this.note);
		},
		deleteNote() {
			this.$emit('deleteNote', this.note);
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
