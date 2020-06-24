import { emailService } from '../services/email.service.js';

import emailList from '../cmps/email-list.cmp.js';

export default {
	template: `
        <section class="email-app">
            <h1>EMAIL APP</h1>
            <email-list v-if="emails" :emails="emails"></email-list>
        </section>
    `,
	data() {
		return {
			emails: null,
		};
	},
	methods: {},
	computed: {},
	created() {
        emailService.getEmails()
        .then((emails) => {
            console.log(emails);
            
            this.emails = emails});
	},
	mounted() {},
	components: {
		emailList,
	},
};
