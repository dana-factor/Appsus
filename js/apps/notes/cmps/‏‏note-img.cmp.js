export default {
	props: ['info', 'isEdit'],
	template: `
          <section class="note-img">
                <img :src="info.url" alt="Invalid Image URL"/>
                <input v-if="isEdit" type="text" v-model="info.url"/>
          </section>
          `,
};
