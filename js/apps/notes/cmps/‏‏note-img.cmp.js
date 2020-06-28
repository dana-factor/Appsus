import { eventBus } from '../../../services/eventbus.service.js';
export default {
	props: ['info', 'isEdit'],
	template: `
          <section class="note-img">
                <img v-if="info.url" @click="show" :src="info.url" alt="Invalid Image URL"/>
                <input v-if="isEdit" type="text" v-model="info.url" placeholder="Enter image url"/>
          </section>
          `,
	methods: {
		show() {
			eventBus.$emit('showBigImg', this.info.url);
		},
	},
};
