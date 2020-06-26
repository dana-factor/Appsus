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
				style: {
					backgroundColor: 'teal',
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
				style: {},
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteText',
				isPinned: true,
				info: {
					text: 'Fullstack Me Baby!',
				},
				style: {
					backgroundColor: 'cyan',
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
				style: {},
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteVideo',
				info: {
					title: 'Watch this amazing video!',
					videoId: 'QH2-TGUlwu4',
				},
				style: {},
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteText',
				isPinned: true,
				info: {
					title: 'yes!',
					text: 'Fullstack Me Baby!',
				},
				style: {},
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteText',
				isPinned: true,
				info: {
					title: 'yes!',
					text: 'Fullstack Me Baby!',
				},
				style: {},
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
				style: {
					backgroundColor: 'pink',
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
				style: {
					backgroundColor: 'pink',
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
				style: {
					backgroundColor: 'pink',
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
				style: {
					backgroundColor: 'pink',
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
				style: {
					backgroundColor: 'pink',
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
				style: {
					backgroundColor: 'pink',
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
						{ text: 'Do', doneAt: null },
						{ text: 'Dont', doneAt: 187111111 },
						{ text: 'Do132', doneAt: null },
						{ text: 'Do11', doneAt: 187111111 },
					],
				},
				style: {
					backgroundColor: 'pink',
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
				style: {
					backgroundColor: 'pink',
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
					backgroundColor: 'pink',
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
				style: {
					backgroundColor: 'pink',
				},
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteVideo',
				info: {
					title: 'Watch this amazing video!',
					videoId: 'QH2-TGUlwu4',
				},
				style: {
					backgroundColor: 'pink',
				},
			},
		];
	}
	return notes;
}
function createNewNoteOfType(type) {
	return {
		type,
		isPinned: false,
		info: { title: null },
		style: {},
	};
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
		note.id = utilsService.getRandomId();
		note.createdAt = Date.now();
		gNotes.unshift(note);
		console.log(gNotes);
	}
	saveNotesToStorage();
	return Promise.resolve(gNotes);
}
function copyNotes(notes) {
	let newNotes = [];
	notes.forEach((note) => newNotes.push(copyNote(note)));
	return newNotes;
}
function copyNote(note) {
	let newNote = { ...note };
	newNote.info = { ...newNote.info };
	newNote.style = { ...newNote.style };
	if (newNote.type === 'noteTodos') {
		newNote.info.todos = [...newNote.info.todos];
	}
	return newNote;
}
export const noteService = {
	getNotes,
	updateNote,
	copyNote,
	copyNotes,
	createNewNoteOfType,
};
