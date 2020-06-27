import notePreview from './note-preview.cmd.js';

export default {
	props: ['notes', 'newNote'],
	template: `
    <section>
		<ul class="new-note clean-list">
			<note-preview :note="newNote" :key="newNote.id" :isNewNote="true" @updateNote="updateNote" @createNewNoteOfType="createNewNoteOfType"></note-preview>
		</ul>
		<ul class="note-list clean-list">
            <note-preview v-for="note in notes" @deleteNote="deleteNote" :key="note.id" :note="{...note}" :isNewNote="false" @updateNote="updateNote"></note-preview>
        </ul>
		<div v-if="notes.length === 0">Nothing Here!</div>
        </section>
	`,
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
