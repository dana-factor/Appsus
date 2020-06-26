import notePreview from './note-preview.cmd.js';

export default {
	props: ['notes', 'newNote'],
	template: `
    <section>
	<note-preview :note="newNote" :isNewNote="true" @updateNote="updateNote"></note-preview>
        <ul class="note-list clean-list">
            <note-preview v-for="note in notes" :key="note.id" :note="{...note}" :isNewNote="false" @updateNote="updateNote"></note-preview>
        </ul>
        </section>
	`,
	// data() {
	// 	return {
	// 		newNote: null
	// 	};
	// },
	// created(){
	// 	console.log(this.newNote)
	// 	// this.createNewNoteOfType('noteText')
	// },
	methods: {
		updateNote(note) {
			this.$emit('updateNote', note);
		},
		// createNewNoteOfType(type) {
		// 	this.$emit('createNewNoteOfType', type);
		// },
	},
	components: {
		notePreview,
	},
};
