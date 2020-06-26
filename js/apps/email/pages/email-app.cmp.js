import { emailService } from '../services/email.service.js';

import emailList from '../cmps/email-list.cmp.js';
import emailEdit from '../cmps/email-edit.cmp.js';
import emailSideNav from '../cmps/‏‏email-side-nav.cmp.js'
import emailFilter from '../cmps/email-filter.cmp.js'

export default {
	template: `
        <section class="email-app flex">
			<email-side-nav v-if="unreadCount" :unreadCount="unreadCount" @compose="createEmail"></email-side-nav>
			<div class="main">
				<email-filter v-if="emails && !editMode"></email-filter>
				<email-list v-if="emails && !editMode" :emails="emails" @updateEmailRead="updateEmailRead"></email-list>
				<email-edit v-if="editMode" @staredToggled="toggleEmailStared(emailId)" @emailRemoved="removeEmail(emailId)"></email-edit>
			</div>
		</section>
    `,
	data() {
		return {
			emails: null,
			unreadCount: null,
			editMode: false
		};
	},
	methods: {
		toggleEmailStared(emailId){
            emailService.toggleEmailStared(emailId)
		},
		removeEmail(emailId){
            emailService.removeEmail(emailId)
		},
		
		updateEmailRead(emailId, status){
			emailService.updateEmailRead(emailId, status)
			emailService.getUnreadCount()
				.then(unreadCount=> this.unreadCount = unreadCount)
		},

		createEmail(){
			this.editMode=!this.editMode
		}
	},
	created() {	
        emailService.getEmails()
        .then((emails) => {
			this.emails = emails
		});
		emailService.getUnreadCount()
			.then(unreadCount=> this.unreadCount = unreadCount)
	},
	mounted() {},
	components: {
		emailList,
		emailEdit,
		emailSideNav,
		emailFilter
	},
};
