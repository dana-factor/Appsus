export default {
	template: `
        <section class="email-add flex column">
                <h2>New Message</h2>
                <input type="email" v-model="emailToSend.sentTo" required placeholder="To: example@appsus.com">
                <input type="text" v-model="emailToSend.subject" required placeholder="Subject">
                <textarea type="text" v-model="emailToSend.text" rows="10" required placeholder="Enter text"/>
                <button @click="sendMail">Send</button>
        </section>
    `,
	data() {
		return {
			emailToSend: {
				sentTo: '',
				sentFrom: 'factor.dana@gmail.com',
				subject: '',
				text: '',
			},
		};
	},
	methods: {
		sendMail() {
			console.log(this.emailToSend);
		},
    },
    destroyed(){
        console.log('draft saved', this.emailToSend);
            
        
    }
};
