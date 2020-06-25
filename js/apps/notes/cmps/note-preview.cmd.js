import noteText from './note-text.cmp.js';
import noteImg from './‏‏note-img.cmp.js';
import noteTodos from './‏‏note-todos.cmp.js';
import noteVideo from './‏‏‏‏note-video.cmp.js';

export default {
	props: ['note'],
	template: `
            <li class="note-preview flex column align-center space-around" :style="note.style">
                    <h3 v-if="note.info.title">{{note.info.title}}</h3>
                    <component :is="note.type" :note="note" :info="note.info" :isEdit="isEdit" @updateNote="updateNote"></component>
					<button @click="isEdit=!isEdit">{{isEdit?'Save':'Edit'}}</button>
            </li>
	`,
	data() {
		return {
			isEdit: false,
		};
	},
	methods:{
		updateNote(note){
			this.$emit('updateNote', note);
		}
	},
	components: {
		noteText,
		noteImg,
		noteTodos,
		noteVideo,
	},
};
