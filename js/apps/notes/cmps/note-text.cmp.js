export default {
	props: ['info', 'isEdit'],
	template: `
          <section class="note-text">
		  		<label v-if="isEdit" for="text">Text:</label>
                <p :contenteditable="isEdit" id="text" @input="onInputText">{{text}}</p>  
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
