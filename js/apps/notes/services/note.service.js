import { utilsService } from '../../../services/utils.service.js';
import { storageService } from '../../../services/storage.service.js';

var gNotes = createNotes();
saveNotesToStorage();
function createNotes() {
	let notes = storageService.loadFromStorage('notes');
	if (!notes || notes.length === 0) {
		notes = [
			{
				id: utilsService.getRandomId(),
				type: 'noteText',
				isPinned: true,
				info: {
					title: 'yes!',
					text: 'Fullstack Me Baby!',
				},
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteText',
				isPinned: true,
				info: {
					title: 'yes!',
					text:
						'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae eos nihil officia. Laborum laboriosam nesciunt eaque obcaecati suscipit nemo dolores veritatis molestias sapiente hic similique nisi enim, pariatur aut ullam?',
				},
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteText',
				isPinned: true,
				info: {
					text: 'Fullstack Me Baby!',
				},
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteImg',
				info: {
					url:
						'https://files.geektime.co.il/wp-content/uploads/2020/04/hello-world-1586356116.jpg',
					title: 'Yo',
				},
				style: {
					backgroundColor: '#00d',
				},
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteTodos',
				info: {
					title: 'How was it:',
					todos: [
						{ text: 'Do that', doneAt: null },
						{ text: 'Do this', doneAt: 187111111 },
					],
				},
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteVideo',
				info: {
					title: 'Watch this amazing video!',
					videoId: 'QH2-TGUlwu4',
				},
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteText',
				isPinned: true,
				info: {
					title: 'yes!',
					text: 'Fullstack Me Baby!',
				},
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteText',
				isPinned: true,
				info: {
					title: 'yes!',
					text: 'Fullstack Me Baby!',
				},
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteText',
				isPinned: true,
				info: {
					text: 'Fullstack Me Baby!',
				},
				style: {
					backgroundColor: 'green',
				},
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteImg',
				info: {
					url:
						'https://files.geektime.co.il/wp-content/uploads/2020/04/hello-world-1586356116.jpg',
					title: 'Yo',
				},
				style: {
					backgroundColor: 'pink',
				},
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteTodos',
				info: {
					title: 'How was it:',
					todos: [
						{ text: 'Do that', doneAt: null },
						{ text: 'Do this', doneAt: 187111111 },
					],
				},
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteImg',
				info: {
					url:
						'https://files.geektime.co.il/wp-content/uploads/2020/04/hello-world-1586356116.jpg',
					title: 'Yo',
				},
				style: {
					backgroundColor: 'pink',
				},
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteTodos',
				info: {
					title: 'How was it:',
					todos: [
						{ text: 'Do that', doneAt: null },
						{ text: 'Do this', doneAt: 187111111 },
					],
				},
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteImg',
				info: {
					url:
						'https://files.geektime.co.il/wp-content/uploads/2020/04/hello-world-1586356116.jpg',
					title: 'Yo',
				},
				style: {
					backgroundColor: 'pink',
				},
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteTodos',
				info: {
					title: 'How was it:',
					todos: [
						{ text: 'Do that', doneAt: null },
						{ text: 'Do this', doneAt: 187111111 },
					],
				},
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteImg',
				info: {
					url:
						'https://files.geektime.co.il/wp-content/uploads/2020/04/hello-world-1586356116.jpg',
					title: 'Yo',
				},
				style: {
					backgroundColor: 'pink',
				},
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteTodos',
				info: {
					title: 'How was it:',
					todos: [
						{ text: 'Do that', doneAt: null },
						{ text: 'Do this', doneAt: 187111111 },
					],
				},
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteImg',
				info: {
					url:
						'https://files.geektime.co.il/wp-content/uploads/2020/04/hello-world-1586356116.jpg',
					title: 'Yo',
				},
				style: {
					backgroundColor: 'pink',
				},
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteTodos',
				info: {
					title: 'How was it:',
					todos: [
						{ text: 'Do that', doneAt: null },
						{ text: 'Do this', doneAt: 187111111 },
					],
				},
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteImg',
				info: {
					url:
						'https://files.geektime.co.il/wp-content/uploads/2020/04/hello-world-1586356116.jpg',
					title: 'Yo',
				},
				style: {
					backgroundColor: 'pink',
				},
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteTodos',
				info: {
					title: 'How was it:',
					todos: [
						{ text: 'Do that', doneAt: null },
						{ text: 'Do this', doneAt: 187111111 },
					],
				},
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteImg',
				info: {
					url:
						'https://files.geektime.co.il/wp-content/uploads/2020/04/hello-world-1586356116.jpg',
					title: 'Yo',
				},
				style: {
					backgroundColor: 'pink',
				},
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteTodos',
				info: {
					title: 'How was it:',
					todos: [
						{ text: 'Do that', doneAt: null },
						{ text: 'Do this', doneAt: 187111111 },
					],
				},
			},
			// {
			// 	id: utilsService.getRandomId(),
			// 	type: 'noteVideo',
			// 	info: {
			// 		title: 'Watch this amazing video!',
			// 		videoId: 'QH2-TGUlwu4',
			// 	},
			// },
			{
				id: utilsService.getRandomId(),
				type: 'noteText',
				isPinned: true,
				info: {
					title: 'yes!',
					text: 'Fullstack Me Baby!',
				},
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteText',
				isPinned: true,
				info: {
					title: 'yes!',
					text: 'Fullstack Me Baby!',
				},
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteText',
				isPinned: true,
				info: {
					text: 'Fullstack Me Baby!',
				},
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteImg',
				info: {
					url:
						'https://files.geektime.co.il/wp-content/uploads/2020/04/hello-world-1586356116.jpg',
					title: 'Yo',
				},
				style: {
					backgroundColor: 'lightblue',
				},
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteTodos',
				info: {
					title: 'How was it:',
					todos: [
						{ text: 'Do that', doneAt: null },
						{ text: 'Do this', doneAt: 187111111 },
					],
				},
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteVideo',
				info: {
					title: 'Watch this amazing video!',
					videoId: 'QH2-TGUlwu4',
				},
			},
		];
	}
	return notes;
}
function getNotes() {
	return Promise.resolve(gNotes);
}
function saveNotesToStorage() {
	storageService.saveToStorage('notes', gNotes);
}
function updateNote(note) {
	if (note.info.title && note.info.title.trim() === '') note.info.title = null;
	if (note.id) {
		const idx = gNotes.findIndex((currNote) => currNote.id === note.id);
		gNotes.splice(idx, 1, note);
	} else {
		note.id = Utils.getRandomId();
		note.createdAt = Date.now();
		gNotes.unshift(note);
	}
	saveNotesToStorage();
	return Promise.resolve(note);
}
export const noteService = {
	getNotes,
	updateNote,
};
