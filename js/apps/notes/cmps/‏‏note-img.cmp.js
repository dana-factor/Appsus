export default {
	props: ['info', 'isEdit'],
	template: `
          <section class="note-img">
                <img :src="info.url" alt="Invalid Image URL"/>
                <input v-if="isEdit" v-model="info.url" @blur="onBlur"/>
          </section>
          `,
	methods: {
		onBlur() {
                  e.target.hidden = false;
            },
            // handle(e){
            //       e.target.hidden = true;
            // }
            // @error="handle"
	},
};
