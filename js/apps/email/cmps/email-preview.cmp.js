import emailStarToggle from './email-star-toggle.cmp.js';

export default {
	props: ['email'],
	template: `
		<router-link :to="'/email/' + email.id">
            <li class="email-preview flex space-between align-center" @click="updateDisplay">
                <div class="flex">
					<div class="icons flex space-between align-center">
						<email-star-toggle :email="email" @staredToggled="toggleEmailStared"></email-star-toggle>
						<i :class="isRead" @click.stop="updateEmailRead(email, false)"></i>
					</div>
					<div class="msg-content flex" @click="updateEmailRead(email, true)">
						<h4 >{{email.sentFrom.name}}</h4>
						<p> {{email.subject}}</p> 
                    </div>
                </div> 
                <p>{{date.day}}.{{date.month}}.{{date.year}}</p>
			</li>
		</router-link>
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
