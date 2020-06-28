import notePreview from './note-preview.cmd.js';

export default {
	props: ['notes', 'newNote'],
	template: `
    <section class="note-list">
		<note-preview v-if="newNote" :class="'new-note'" :note="newNote" :key="newNote.id" :isNewNote="true" @updateNote="updateNote" @createNewNoteOfType="createNewNoteOfType"></note-preview>
		
		<ul class="clean-list">
            	<note-preview v-for="note in notes" @deleteNote="deleteNote" :key="note.id" :note="{...note}" :isNewNote="false" @updateNote="updateNote"></note-preview>
		</ul>
    </section>
	`,
	computed: {
		doneButtonText() {

		},
	},
	methods: {
		updateNote(note) {
			this.$emit('updateNote', note);
		},
		createNewNoteOfType(type) {
			this.$emit('createNewNoteOfType', type);
		},
		deleteNote(note) {
			this.$emit('deleteNote', note);
		},
	},
	components: {
		notePreview,
	},
};
