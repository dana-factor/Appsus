import { utilsService } from '../../../services/utils.service.js';
import { storageService } from '../../../services/storage.service.js';

// const noteTypes = {
// 	noteText: 'noteText',
// 	noteImg: 'noteImg',
// 	noteTodos: 'noteTodos',
// 	noteVideo: 'noteVideo',
// };
var gNotes = createNotes();
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
		];
	}
	return notes;
}
function getNotes() {
	return Promise.resolve(gNotes);
}
export const noteService = {
	getNotes,
	// noteTypes,
};
