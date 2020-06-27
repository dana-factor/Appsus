export default {
	props: ['email'],
	template: `
        <section class="email-add flex column">
                <h2>New Message</h2>
                <input type="email" v-model="emailToSend.sentTo" required placeholder="To: example@appsus.com">
                <input type="text" v-model="emailToSend.subject" required placeholder="Subject">
                <textarea type="text" v-model="emailToSend.body" rows="20" maxlength="200" required placeholder="Enter text"/>
                <div class="btn-container">
                    <button @click="sendEmail"><i class="far fa-paper-plane"></i> Send</button>
                    <button @click="saveDraft"><i class="far fa-save"></i> Save</button>
                    <button @click="remove"><i class="far fa-trash-alt"></i> Delete</button>
				 	<pre v-if=email>{{email}}</pre>
				</div>
        </section>
    `,
	data() {
		return {
			emailToSend: {
				createdAt: Date.now(),
				sentTo: '',
				sentFrom: {
					name: 'Dana',
					address: 'factor.dana@gmail.com',
				},
				subject: '',
				body: '',
				sentAt: Date.now(),
				isRead: true,
				isStared: false,
				isDraft: false,
			},
		};
	},

	methods: {
		sendEmail() {
			console.log(this.emails);

			this.$emit('emailSent', this.emailToSend);
			this.remove();
		},
		saveDraft() {
			this.emailToSend.isDraft = true;
			this.sendEmail();
		},
		remove() {
			this.emailToSend = {
				createdAt: Date.now(),
				sentTo: '',
				sentFrom: {
					name: 'Dana',
					address: 'factor.dana@gmail.com',
				},
				subject: '',
				body: '',
				sentAt: Date.now(),
				isRead: false,
				isStared: false,
				isDraft: false,
			};
		},
	},
	destroyed() {
		this.$router.push('/email');
		if (
			this.emailToSend.body === '' &&
			this.emailToSend.subject === '' &&
			this.emailToSend.sentTo === ''
		)
			return;
		else {
			this.saveDraft();
		}
	},
	created(){
		const { emailId } = this.$route.params;
		if (emailId === 'compose') return;
		this.$emit('draftEdit', this.emailId)
		// console.log('1', emailId);
	},
	watch: {
			email() {
			this.emailToSend = email
			// console.log('lala', email);
		},
	},
}
