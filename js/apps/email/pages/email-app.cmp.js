import { emailService } from '../services/email.service.js';

import emailList from '../cmps/email-list.cmp.js';
import emailEdit from '../cmps/email-edit.cmp.js';
import emailSideNav from '../cmps/‏‏email-side-nav.cmp.js'
import emailFilter from '../cmps/email-filter.cmp.js'

export default {
	template: `
        <section class="email-app flex">
			<email-side-nav v-if="unreadCount" :unreadCount="unreadCount" @updateDisplay="updateMainDisplay" @setDisplayGroup="setDisplayEmailsBy"></email-side-nav>
			<div class="main">
				<router-view v-if="mainDisplay.details"/>
				<email-filter v-if="emails && mainDisplay.listAndFilter" @filtered="setFilter"></email-filter>
				<email-list v-if="emails && mainDisplay.listAndFilter" :emails="emailsToShow" @updateEmailRead="updateEmailRead" @updateDisplay="updateMainDisplay" @staredToggled="toggleEmailStared"></email-list>
				<email-edit v-if="mainDisplay.edit" @staredToggled="toggleEmailStared(emailId)" @emailRemoved="removeEmail(emailId)" @emailSent="sendEmail"></email-edit>
			</div>
		</section>
    `,
	data() {
		return {
			emails: null,
			unreadCount: null,
			editMode: false,
			filterBy: null,
			displayEmailsBy: 'incoming',
			mainDisplay: {
				listAndFilter: true,
				edit: false,
				details: false
			}
		};
	},
	computed:{
		unreadCount(){
			emailService.getUnreadCount()
		}

	},
	methods: {
		toggleEmailStared(emailId){
            emailService.toggleEmailStared(emailId)
		},
		
		removeEmail(emailId){
            emailService.removeEmail(emailId)
		},
		
		sendEmail(email){
			this.updateMainDisplay('listAndFilter')
            emailService.sendEmail(email)
		},
		
		updateEmailRead(emailId, status){
			emailService.updateEmailRead(emailId, status)
			emailService.getUnreadCount()
				.then(unreadCount=> this.unreadCount = unreadCount)
		},

		updateMainDisplay(main){
			for (const property in this.mainDisplay){
				this.mainDisplay[property] = (property===main) ? true : false
			}
		},
		setFilter(filterBy){
            this.filterBy = filterBy;
		},
		setDisplayEmailsBy(group){
			this.displayEmailsBy = group 
		}
	},
	computed: {
        emailsToShow() {
			var displayEmailsBy = this.displayEmailsBy
			var emails = this.emails
			emails = emails.filter(email=>{
				if (displayEmailsBy==='draft') return email.isDraft === true;
				else if (displayEmailsBy === 'incoming') return email.sentTo === 'factor.dana@gmail.com';
				else if (displayEmailsBy === 'outgoing') return email.sentFrom.address === 'factor.dana@gmail.com';
				else if (displayEmailsBy ==='stared') return email.isStared === true;
			})

            const filterBy = this.filterBy;
            if (!filterBy) return emails;

            var filteredEmails = emails.filter(email => {
                return email.body.toLowerCase().includes(filterBy.searchStr.toLowerCase());
            });
            filteredEmails = filteredEmails.filter(email => {
                if (!filterBy.isRead) return true
                else if (filterBy.isRead === "all") return email;
                else if (filterBy.isRead === "read") return email.isRead === true;
                else if (filterBy.isRead === "unread") return email.isRead === false;
            });

            return filteredEmails;
        },
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
