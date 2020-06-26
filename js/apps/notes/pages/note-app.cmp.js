import { noteService } from '../services/note.service.js';
import { utilsService } from '../../../services/utils.service.js';
import noteFilter from '../cmps/note-filter.cmp.js';
import noteList from '../cmps/note-list.cmp.js';

export default {
	template: `
        <section class="note-app">
			<h1>Notes</h1>
			<note-filter  @filtered="setFilter"></note-filter>
            <note-list v-if="notes" :notes="notesToShow" :newNote="newNote" @createNewNoteOfType="createNewNoteOfType" @updateNote="updateNote"></note-list>
        </section>
    `,
	data() {
		return {
			notes: null,
			filterBy: null,
			newNote: null,
		};
	},
	computed: {
		notesToShow() {
			let processedNotes = this.notes.sort((note1, note2) => {
				return note1.isPinned === note2.isPinned ? 0 : note2.isPinned ? -1 : 1;
			});
			const filterBy = this.filterBy;
			if (!filterBy) return processedNotes;

			processedNotes = processedNotes.filter(
				(note) =>
					(!filterBy.text ||
					(note.info.title &&
						utilsService.includesIgnoresCase(note.info.title, filterBy.text)) || //search in title - universal
					(note.info.text &&
						utilsService.includesIgnoresCase(note.info.text, filterBy.text)) || // search in text - noteText
						(note.info.todos &&
							note.info.todos.findIndex(
								(todo) =>
									utilsService.includesIgnoresCase(todo.text, filterBy.text) // search in todos - noteTodos
							) !== -1)) &&
					(!filterBy.noteType || filterBy.noteType === note.type)
			);
			return processedNotes;
		},
	},
	methods: {
		setFilter(filterBy) {
			this.filterBy = filterBy;
		},
		updateNote(note) {
			noteService
				.updateNote(note)
				.then((notes) => (this.notes = noteService.copyNotes(notes)));
		},
		createNewNoteOfType(type) {
			this.newNote = noteService.createNewNoteOfType(type);
		},
	},
	created() {
		this.createNewNoteOfType('noteText');
		noteService.getNotes().then((notes) => {
			this.notes = noteService.copyNotes(notes);
		});
	},
	components: {
		noteList,
		noteFilter,
	},
};
