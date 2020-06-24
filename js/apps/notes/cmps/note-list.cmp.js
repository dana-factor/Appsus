import noteText from './note-text.cmp.js';
import noteImg from './‏‏note-img.cmp.js';
import noteTodos from './‏‏note-todos.cmp.js';
import noteVideo from './‏‏‏‏note-video.cmp.js';

export default {
	props: ['notes'],
	template: `
    <section>
    <!-- flex wrap align-center space-around -->
        <ul class="note-list clean-list">
            <li v-for="(note, idx) in notes"  class="flex column align-center">
                    <h3 v-if="note.info.title">{{note.info.title}}</h3>
                    <component :is="note.type" :info="note.info"></component>
                    <button>Edit</button>
            </li>
        </ul>
        </section>
    `,
	components: {
        noteText,
        noteImg,
        noteTodos,
        noteVideo
	},
};
