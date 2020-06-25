import { noteService } from '../services/note.service.js';
import { utilsService } from '../../../services/utils.service.js';
import noteFilter from '../cmps/note-filter.cmp.js';
import noteList from '../cmps/note-list.cmp.js';

export default {
	template: `
        <section class="note-app">
            <h1>Notes</h1>
			<router-view @save="save" :notes="notes"></router-view>
            <note-filter  @filtered="setFilter"></note-filter>
            <note-list v-if="notes" :notes="notesToShow"></note-list>
        </section>
    `,
	data() {
		return {
			notes: null,
			filterBy: null,
		};
	},
	computed: {
		notesToShow() {
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
	},
	methods: {
		save(a) {
			console.log(a);
		},
		setFilter(filterBy) {
			this.filterBy = filterBy;
		},
	},
	created() {
		noteService.getNotes().then((notes) => {
			this.notes = notes;
		});
	},
	components: {
		noteList,
		noteFilter,
	},
};
