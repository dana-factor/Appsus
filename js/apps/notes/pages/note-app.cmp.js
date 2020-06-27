import { noteService } from '../services/note.service.js';
import { utilsService } from '../../../services/utils.service.js';
import noteFilter from '../cmps/note-filter.cmp.js';
import noteList from '../cmps/note-list.cmp.js';

export default {
	template: `
        <section class="note-app main-container container">
			<h1>TRIP and KEEP </h1>
			<note-filter  @filtered="setFilter"></note-filter>
			<note-list v-if="notes" :notes="pinnedNotes" :class="'pinned-note-list'" :newNote="newNote" @deleteNote="deleteNote" @createNewNoteOfType="createNewNoteOfType" @updateNote="updateNote"></note-list>
            <note-list v-if="notes" :notes="unpinnedNotes" @deleteNote="deleteNote" @updateNote="updateNote"></note-list>
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
		filteredNotes(){
			const filterBy = this.filterBy;
			if (!filterBy) return this.notes;

			return this.notes.filter(
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
		},
		unpinnedNotes() {
			return this.filteredNotes.filter((note) => !note.isPinned);
		},
		pinnedNotes() {
			return this.filteredNotes.filter((note) => note.isPinned);
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
		deleteNote(note) {
			noteService.deleteNote(note).then((notes) => {
				this.notes = noteService.copyNotes(notes);
			});
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
