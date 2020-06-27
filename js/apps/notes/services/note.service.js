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
					title: 'Hope U don\'t mind',
					text: 'I broke into your beloved app to leave this message, was so fun meeting you! let me know when your\'e in Guatemal again, much love',
				},
				style: { backgroundColor: '#FFFFFF', color: '#000000' },
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteText',
				isPinned: false,
				info: {
					title: 'A Little Reminder:',
					text:
						'Where attention goes energy flows',
				},
				style: { backgroundColor: '#FFFFFF', color: '#000000' },
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteText',
				isPinned: true,
				info: {
					text: 'Mom\'s birthday on sunday',
				},
				style: { backgroundColor: '#FFFFFF', color: '#000000' },
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteImg',
				isPinned: true,
				info: {
					url:
						'https://www.rei.com/dam/harnois_041918_1182-backpacking-tips-for-women-hero-lg.jpg',
					title: 'On The Hike!',
				},
				style: { backgroundColor: '#FFFFFF', color: '#000000' },
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteTodos',
				info: {
					title: 'To Do:',
					todos: [
						{ id:utilsService.getRandomId(), text: 'Book next flight', isDone: false },
						{ id:utilsService.getRandomId(), text: 'Exchange money', isDone: true },
						{ id:utilsService.getRandomId(), text: 'Rate hostel on google', isDone: true },
					],
				},
				style: { backgroundColor: '#FFFFFF', color: '#000000' },
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteTodos',
				isPinned: true,
				info: {
					title: 'Gift List:',
					todos: [
						{ id:utilsService.getRandomId(), text: 'Noa', isDone: false },
						{ id:utilsService.getRandomId(), text: 'Noy', isDone: true },
						{ id:utilsService.getRandomId(), text: 'Guy', isDone: true },
						{ id:utilsService.getRandomId(), text: 'Chen', isDone: false },
						{ id:utilsService.getRandomId(), text: 'Lital', isDone: false },
						{ id:utilsService.getRandomId(), text: 'Gal', isDone: true },
						{ id:utilsService.getRandomId(), text: 'Daniel', isDone: true },
					],
				},
				style: { backgroundColor: '#FFFFFF', color: '#000000' },
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteVideo',
				info: {
					title: 'Freedom Song',
					videoId: 'JgRBkjgXHro',
				},
				style: { backgroundColor: '#FFFFFF', color: '#000000' },
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteVideo',
				isPinned: true,
				info: {
					title: 'Road Trip Playlist',
					videoId: 'uxnUeZ8QQYg',
				},
				style: { backgroundColor: '#FFFFFF', color: '#000000' },
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteText',
				isPinned: true,
				info: {
					title: 'Tip from nice guy on the bus',
					text: 'Watch sunset on Wakala mountain',
				},
				style: { backgroundColor: '#FFFFFF', color: '#000000' },
			},
			{
				id: utilsService.getRandomId(),
				type: 'noteText',
				isPinned: false,
				info: {
					title: 'Song I wrote:',
					text: 'My app is so amazing, I love it so much, it\'s so smooth and soon will have touch',
				},
				style: { backgroundColor: '#FFFFFF', color: '#000000' },
			},
	
			
		];
	}
	return notes;
}
function createNewNoteOfType(type) {
	return {
		id: utilsService.getRandomId(),
		type,
		isPinned: false,
		info: { title: '' },
		style: { backgroundColor: '#FFFFFF', color: '#000000' },
	};
}
function getNotes() {
	return Promise.resolve(gNotes);
}
function saveNotesToStorage() {
	storageService.saveToStorage('notes', gNotes);
}
function updateNote(note) {
	if (!note.info.title || note.info.title && note.info.title.trim() === '') note.info.title = null;
	if (gNotes.find((findNote) => note.id === findNote.id)) {
		const idx = gNotes.findIndex((currNote) => currNote.id === note.id);
		gNotes.splice(idx, 1, note);
	} else {
		gNotes.unshift(note);
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
function deleteNote(noteToDelete) {
	gNotes = gNotes.filter((note) => noteToDelete.id !== note.id);
	saveNotesToStorage();
	return Promise.resolve(gNotes);
}
export const noteService = {
	getNotes,
	updateNote,
	copyNote,
	copyNotes,
	createNewNoteOfType,
	deleteNote,
};
