export default {
	props: ['note', 'info', 'isEdit'],
	template: `
          <section>
                <p :contenteditable="isEdit" @input="onInputText">{{text}}</p>  
          </section>
		  `,
	data() {
		return {
			text: this.info.text,
		};
	},
	methods: {
		onInputText(e) {
			this.info.text = e.target.innerText;
		},
	},
};
