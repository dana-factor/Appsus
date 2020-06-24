// import {utilsService} from '../../../services/utils.service.js';
import { storageService } from '../../../services/storage.service.js';

export const noteService = {
	getNotes,
};

var gNotes = createNotes();
function createNotes() {
	let notes = storageService.loadFromStorage('notes');
	if (!notes || notes.length === 0) {
		notes = [
			{
				type: 'NoteText',
				isPinned: true,
				info: {
					txt: 'Fullstack Me Baby!',
				},
			},
			{
				type: 'NoteImg',
				info: {
					url: 'http://some-img/me',
					title: 'Me playing Mi',
				},
				style: {
					backgroundColor: '#00d',
				},
			},
			{
				type: 'NoteTodos',
				info: {
					label: 'How was it:',
					todos: [
						{ txt: 'Do that', doneAt: null },
						{ txt: 'Do this', doneAt: 187111111 },
					],
				},
			},
		];
	}
	return notes;
}
function getNotes() {
	return gNotes;
}
