import notePreview from './note-preview.cmd.js';

export default {
	props: ['notes'],
	template: `
    <section>
    <!-- flex wrap align-center space-around -->
        <ul class="note-list clean-list">
            <note-preview :note="note" v-for="note in notes" :key="note.id" @updateNote="updateNote"></note-preview>
        </ul>
        </section>
    `,
	methods: {
		updateNote(note) {
			this.$emit('updateNote', note);
		},
	},
	components: {
		notePreview,
	},
};
