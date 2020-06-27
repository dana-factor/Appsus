import noteText from './note-text.cmp.js';
import noteImg from './‏‏note-img.cmp.js';
import noteTodos from './‏‏note-todos.cmp.js';
import noteVideo from './‏‏‏‏note-video.cmp.js';
import noteProperties from './note-properties.cmp.js';

export default {
	props: ['note', 'isNewNote'],
	template: `
            <li class="note-preview flex column align-center space-between" :class="{edit: isEdit}" :style="note.style">
					<button v-if="!isNewNote" @click="onPinNote" class="pin-button">{{note.isPinned ? 'Unpin': 'Pin'}}</button>
					<label v-if="isShowTitle && isEdit" for="title">Title:</label>
                    <h3 v-if="isShowTitle" id="title" :contenteditable="isEdit" @input="onInputTitle">{{title}}</h3>
                    <component :is="note.type" :note="note" :isNewNote="isNewNote" :info="note.info" :isEdit="isEdit" @updateNote="updateNote"></component>
					<div v-if="isNewNote">
						<button @click="$emit('createNewNoteOfType','noteText')">Text</button>
						<button @click="$emit('createNewNoteOfType','noteImg')">Image</button>
						<button @click="$emit('createNewNoteOfType','noteVideo')">Video</button>
						<button @click="$emit('createNewNoteOfType','noteTodos')">Todo</button>
					</div>
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
		isShowTitle(){
			return this.note.info.title || this.note.info.title === '';
		}
	},
	methods: {
		onPinNote() {
			this.note.isPinned = !this.note.isPinned;
			this.updateNote();
		},
		onInputTitle(e) {
			this.note.info.title = e.target.innerText;
			// console.log(e.target.innerHtml);
			// if (e.target.innerText === '') e.innerHtml = '';
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
