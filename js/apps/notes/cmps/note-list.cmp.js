import notePreview from './note-preview.cmd.js';

export default {
	props: ['notes'],
	template: `
    <section>
    <!-- flex wrap align-center space-around -->
        <ul class="note-list clean-list">
        <note-preview :note="note" v-for="note in notes" :key="note.id"></note-preview>
        </ul>
        </section>
    `,
	components: {
        notePreview
	},
};
