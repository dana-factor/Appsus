import { noteService } from '../services/note.service.js';
import noteFilter from '../cmps/note-filter.cmp.js';
import noteEdit from '../cmps/note-edit.cmp.js';
import noteList from '../cmps/note-list.cmp.js';

export default {
	template: `
        <section>
            <h1>NOTE APP</h1>

            <note-list></note-list>
        </section>
    `,
	data() {
		return {
			notes: null,
			filterBy: null,
		};
	},
	computed: {
		// notesToShow() {
		// 	return notes;
		// },
	},
	methods: {
		created() {
			noteService.getNotes().then((notes) => {
				this.notes = notes;
			});
		},
	},
	components: {
        noteList,
		noteFilter,
		noteEdit,
	},
};
/* <note-filter></note-filter>
<note-edit></note-edit> */