export default {
	props: ['note', 'info', 'isEdit'],
	template: `
          <section>
                <p :contenteditable="isEdit" @input="onInput">{{info.text}}</p>  
          </section>
          `,
	methods: {
		onInput(e) {
                  this.info.text = e.target.innerText;
                  console.log(this.note);
			this.$emit('updateNote', this.note);
		},
	},
};
