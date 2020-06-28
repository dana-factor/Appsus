import noteText from './note-text.cmp.js';
import noteImg from './‏‏note-img.cmp.js';
import noteTodos from './‏‏note-todos.cmp.js';
import noteVideo from './‏‏‏‏note-video.cmp.js';
import noteProperties from './note-properties.cmp.js';
import { eventBus } from '../../../services/eventbus.service.js';

export default {
	props: ['note', 'isNewNote'],
	template: `
            <li class="note-preview flex column align-center space-between" :class="{edit: isEdit}" :style="note.style">
					<button v-if="!isNewNote" @click="onPinNote" class="fas fa-thumbtack fa-lg pin-button" :class="{black:note.isPinned}"></button>
					<label v-if="isEdit" for="title">Title:</label>
					<h3 v-if="isShowTitle" id="title" :contenteditable="isEdit" @input="onInputTitle">{{title}}</h3>
					<div v-if="isNewNote" class="new-note-type flex">
						<button @click="$emit('createNewNoteOfType','noteText')" class="fas fa-font fa-lg" :class="{black:note.type==='noteText'}"></button>
						<button @click="$emit('createNewNoteOfType','noteTodos')" class ="fas fa-list-ul fa-lg" :class="{black:note.type==='noteTodos'}"></button>
						<button @click="$emit('createNewNoteOfType','noteImg')" class ="fas fa-image fa-lg" :class="{black:note.type==='noteImg'}"></button>
						<button @click="$emit('createNewNoteOfType','noteVideo')" class ="fab fa-youtube fa-lg" :class="{black:note.type==='noteVideo'}"></button>
					</div>
                    <component :is="note.type" :note="note" :isNewNote="isNewNote" :info="note.info" :isEdit="isEdit" @updateNote="updateNote"></component>
					<div class="preview-bottom flex">
						<note-properties v-if="isEdit" :note="note" :isNewNote="isNewNote" @deleteNote="deleteNote"></note-properties>
					</div>
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
		isShowTitle() {
			return this.note.info.title || this.isEdit;
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
				if (this.isEdit) {
					if (this.updateNote()) this.isEdit = !this.isEdit;
				} else this.isEdit = !this.isEdit;
			}
		},
		updateNote() {
			if (this.validateNote()) {
				this.$emit('updateNote', this.note);
				return true;
			} else {
				eventBus.$emit('showMessage', "Notes can't be empty");
				return false;
			}
		},
		deleteNote() {
			this.$emit('deleteNote', this.note);
		},
		validateNote() {
			switch (this.note.type) {
				case 'noteText':
					return !!this.note.info.text && !!this.note.info.text.trim();
				case 'noteImg':
					return !!this.note.info.url && !!this.note.info.url.trim();
				case 'noteVideo':
					return !!this.note.info.videoId && !!this.note.info.videoId.trim();
				case 'noteTodos':
					return !!this.note.info.todos.length;
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
