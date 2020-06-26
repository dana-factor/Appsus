export default {
	template: `
        <section class="email-add flex column">
                <h2>New Message</h2>
                <input type="email" v-model="emailToSend.sentTo" required placeholder="To: example@appsus.com">
                <input type="text" v-model="emailToSend.subject" required placeholder="Subject">
                <textarea type="text" v-model="emailToSend.body" rows="20" maxlength="200" required placeholder="Enter text"/>
                <div class="btn-container">
                    <button @click="sendMail"><i class="far fa-paper-plane"></i> Send</button>
                    <button @click="saveDraft"><i class="far fa-save"></i> Save</button>
                    <button @click="remove"><i class="far fa-trash-alt"></i> Delete</button>
                 </div>
        </section>
    `,
	data() {
		return {
			emailToSend: {
				// id: utilsService.getRandomId(),
				createdAt: Date.now(),
				sentTo: '',
				sentFrom: {
					name: 'Dana',
					address: 'factor.dana@gmail.com',
				},
				subject: '',
				body: '',
				sentAt: 1551133930599,
				isRead: false,
				isStared: false,
			},
		};
	},

	methods: {
		sendMail() {
			console.log(this.emailToSend);
		},
		saveDraft() {
			console.log('draft saved');
		},
		remove() {
			console.log('draft removed');
		},
	},
	destroyed() {
		console.log('draft saved', this.emailToSend);
	},
};
