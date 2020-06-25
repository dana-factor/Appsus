export default {
	props: ['note', 'info', 'isEdit'],
	template: `
          <section>
                <p :contenteditable="isEdit" @blur="onBlur">{{info.text}}</p>  
          </section>
          `,
	methods: {
		onBlur(e) {
			this.info.text = e.target.innerText;
			this.$emit('updateNote', this.note);
		},
	},
};
