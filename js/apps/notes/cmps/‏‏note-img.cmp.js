export default {
	props: ['info', 'isEdit'],
	template: `
          <section class="note-img">
                <img v-if="info.url" :src="info.url" alt="Invalid Image URL"/>
                <input v-if="isEdit" type="text" v-model="info.url" placeholder="Enter image url"/>
          </section>
          `,
};
