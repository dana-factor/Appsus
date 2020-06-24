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
				type: 'noteText',
				isPinned: true,
				info: {
					title: 'yes!',
					text: 'Fullstack Me Baby!',
				},
			},
			{
				type: 'noteText',
				isPinned: true,
				info: {
					title: 'yes!',
					text: 'Fullstack Me Baby!',
				},
			},
			{
				type: 'noteText',
				isPinned: true,
				info: {
					text: 'Fullstack Me Baby!',
				},
			},
			{
				type: 'noteImg',
				info: {
					url: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ffiles.geektime.co.il%2Fwp-content%2Fuploads%2F2020%2F04%2Fhello-world-1586356116.jpg&sp=1593025535T75a5bb9fbddfd081124092f21c66fb20de7f0ea0aa6503915e2575c88f34650b',
					title: 'Yo',
				},
				style: {
					backgroundColor: '#00d',
				},
			},
			// {
			// 	type: 'NoteTodos',
			// 	info: {
			// 		label: 'How was it:',
			// 		todos: [
			// 			{ txt: 'Do that', doneAt: null },
			// 			{ txt: 'Do this', doneAt: 187111111 },
			// 		],
			// 	},
			// },
		];
	}
	return notes;
}
function getNotes() {
	return Promise.resolve(gNotes);
}
