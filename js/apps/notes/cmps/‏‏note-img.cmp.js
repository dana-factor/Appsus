export default {
	props: ['note', 'info', 'isEdit'],
	template: `
          <section class="note-img">
                <img :src="info.url" @error="handle"/>
                <input v-if="isEdit" v-model="info.url" @blur="onBlur"/>
          </section>
          `,
	methods: {
		onBlur() {
                  e.target.hidden = false;
			this.$emit('updateNote', this.note);
            },
            handle(e){
                  e.target.hidden = true;
            }
	},
};
