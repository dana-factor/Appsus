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
					<label v-if="isEdit" for="title">Title:</label>
                    <h3 v-if="isShowTitle" id="title" :contenteditable="isEdit" @input="onInputTitle">{{title}}</h3>
                    <component :is="note.type" :note="note" :isNewNote="isNewNote" :info="note.info" :isEdit="isEdit" @updateNote="updateNote"></component>
					<div class="preview-bottom flex">
						<fieldset v-if="isNewNote">
							<legend>Type</legend>
							<button @click="$emit('createNewNoteOfType','noteText')">Text</button>
							<button @click="$emit('createNewNoteOfType','noteImg')">Image</button>
							<button @click="$emit('createNewNoteOfType','noteVideo')">Video</button>
							<button @click="$emit('createNewNoteOfType','noteTodos')">Todo</button>
						</fieldset>
						<note-properties v-if="isEdit" :note="note" @deleteNote="deleteNote"></note-properties>
					</div>
					<!-- {{doneButtonText}} -->
					<button class="svg-button" @click="onButtonClick" v-html="editSVG"></button>
			</li>
	`,
	data() {
		return {
			isEdit: false,
			title: this.note.info.title,
			editSVG:
				'<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m384.721 0-323.626 323.627-61.095 188.373 188.374-61.094 323.626-323.627zm84.853 127.279-42.427 42.427-84.853-84.853 42.426-42.427zm-388.611 232.331 71.427 71.428-32.036 10.39-49.782-49.782zm14.501-27.925 225.617-225.618 31.82 31.82-225.618 225.617zm53.032 53.032 225.618-225.619 31.82 31.82-225.618 225.619zm-88.313 38.965 28.136 28.136-41.642 13.505z"/></g></svg>',
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
