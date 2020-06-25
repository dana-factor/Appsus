import noteText from './note-text.cmp.js';
import noteImg from './‏‏note-img.cmp.js';
import noteTodos from './‏‏note-todos.cmp.js';
import noteVideo from './‏‏‏‏note-video.cmp.js';

export default {
	props: ['note'],
	template: `
            <li class="note-preview flex column align-center space-around" :style="note.style">
                    <h3 v-if="note.info.title">{{note.info.title}}</h3>
                    <component :is="note.type" :info="note.info"></component>
                    <router-link :to="'/notes/edit/'+note.id">Edit</router-link>
            </li>
    `,
	components: {
		noteText,
		noteImg,
		noteTodos,
		noteVideo,
	},
};
