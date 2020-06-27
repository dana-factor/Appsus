import emailStarToggle from './email-star-toggle.cmp.js';

export default {
	props: ['email'],
	template: `
            <li class="email-preview flex space-between align-center">
                <div class="flex" @click="updateDisplay">
					<div class="icons flex space-between align-center">
						<email-star-toggle :email="email" @staredToggled="toggleEmailStared"></email-star-toggle>
						<i :class="isRead" @click.stop="updateEmailRead(email, false)"></i>
					</div>
					<div @click="updateEmailRead(email, true)">
                        <router-link :to="'/email/' + email.id">
                            <h4 >{{email.sentFrom.name}}</h4>
                            <p> {{email.subject}}</p> 
                        </router-link>
                    </div>
                </div> 
                <p>{{date.day}}.{{date.month}}.{{date.year}}</p>
            </li>
      `,
	data() {
		let sentDate = new Date(this.email.sentAt);
		return {
			date: {
				day: sentDate.getDate(),
				month: sentDate.getMonth(),
				year: sentDate.getFullYear(),
			},
		};
	},
	computed: {
		isRead() {
			return this.email.isRead ? 'far fa-envelope-open' : 'fas fa-envelope';
		},
	},
	methods: {
		updateEmailRead(email, status) {
			if (email.isRead && status) return;
			this.$emit('updateEmailRead', email.id, status);
		},
		updateDisplay() {
			this.$emit('updateDisplay', 'details');
		},
		toggleEmailStared(emailId) {
			this.$emit('staredToggled', emailId);
		},
	},
	components: {
		emailStarToggle,
	},
};
