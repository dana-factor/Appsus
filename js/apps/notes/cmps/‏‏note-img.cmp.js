export default {
	props: ['note', 'info', 'isEdit'],
	template: `
          <section class="note-img">
                <img :src="info.url" alt="Invalid Image URL"/>
                <input v-if="isEdit" v-model="info.url" @blur="onBlur"/>
          </section>
          `,
	methods: {
		onBlur() {
                  e.target.hidden = false;
			this.$emit('updateNote', this.note);
            },
            // handle(e){
            //       e.target.hidden = true;
            // }
            // @error="handle"
	},
};
