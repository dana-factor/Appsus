// import { eventBus } from '../../../services/eventbus.service.js';
import { emailService } from '../services/email.service.js';

import emailList from '../cmps/email-list.cmp.js';
import emailEdit from '../cmps/email-edit.cmp.js';

export default {
	template: `
        <section class="email-app">
			<h1>EMAIL APP</h1>
			<email-edit @staredToggled="toggleEmailStared(emailId)" @emailRemoved="removeEmail(emailId)"></email-edit>
            <email-list v-if="emails" :emails="emails"></email-list>
        </section>
    `,
	data() {
		return {
			emails: null,
		};
	},
	methods: {
		toggleEmailStared(emailId){
            emailService.toggleEmailStared(emailId)
		},
		removeEmail(emailId){
            emailService.removeEmail(emailId)
        },

	},
	computed: {},
	created() {	
        emailService.getEmails()
        .then((emails) => {
            console.log(emails);
            
            this.emails = emails});

        // eventBus.$on('star-toggled', ((emailId)=>{
        //     console.log('&&&&');
            
        //     this.toggleEmailStared(emailId)
        //     // eventBus.$emit('star-toggled', this.email.id)
        // }))
    },
	mounted() {},
	components: {
		emailList,
		emailEdit
	},
};
