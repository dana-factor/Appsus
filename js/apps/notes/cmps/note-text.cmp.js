export default {
	props: ['info', 'isEdit'],
	template: `
          <section>
                <p :contenteditable="isEdit" @input="onInputText">{{info.text}}</p>  
          </section>
          `,
	methods: {
		onInputText(e) {
			this.info.text = e.target.innerText;
			// console.log('text',this.info.text);
		},
	},
};
