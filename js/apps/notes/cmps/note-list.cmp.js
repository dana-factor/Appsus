import noteText from './note-text.cmp.js';
import noteImg from './‏‏note-img.cmp.js';

export default {
	props: ['notes'],
	template: `
    <section>
        <ul class="note-list clean-list flex wrap align-center space-around">
            <li v-for="(note, idx) in notes"  class="flex column align-center">
                    <h3 v-if="note.info.title">{{note.info.title}}</h3>
                    <component :is="note.type" :info="note.info"></component>
            </li>
        </ul>
        </section>
    `,
	components: {
        noteText,
        noteImg
	},
};
