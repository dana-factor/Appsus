import { emailService } from '../services/email.service.js';

export default {
	template: `
        <section v-if="email" class="email-details">
        <nav>
            <router-link v-if="prevEmailId" :to="'/email/' + prevEmailId">Previous Email</router-link> |
            <router-link v-if="nextEmailId" :to="'/email/' + nextEmailId">Next Email</router-link>
        </nav>
        <h3>{{email.subject}}</h3>
        
        
        <h4>Sent From: {{email.sentFrom.name}}, </h4>
        <h6>{{email.sentFrom.address}}</h6>
        <p v-if="email">{{date.day}}.{{date.month}}.{{date.year}}</p>
        <p>{{email.body}}</p>
        <i :class=isStared @click="toggleStared"></i>
        <router-link v-if="nextEmailId" :to="'/email/' + nextEmailId">
            <i @click="removeEmail" class="far fa-trash-alt"></i>
        </router-link>
        </section>
    `,
	data() {
		return {
			email: null,
			prevEmailId: null,
            nextEmailId: null,
            date: null
		};
	},
	computed: {
		isStared() {
			return this.email.isStared ? 'fas fa-star' : 'far fa-star';
        },
	},
	methods: {
        toggleStared(){
            emailService.toggleEmailStared(this.email.id)
        },
        removeEmail(){
            emailService.removeEmail(this.email.id)
        },
		loadEmail() {
			const { emailId } = this.$route.params;

            emailService.getEmailById(emailId)
                .then((email) => {
				    this.email = email;
                    this.date = {
                        day: new Date(this.email.sentAt).getDate(),
                        month: new Date(this.email.sentAt).getMonth(),
                        year: new Date(this.email.sentAt).getFullYear()
                    }
                    emailService.getPrevEmailId(this.email.id)
                        .then((emailId) => {
                            this.prevEmailId = emailId;
                    });

                    emailService.getNextEmailId(this.email.id)
                        .then((emailId) => {
                            this.nextEmailId = emailId;
                    });
			});
        },
	},
	created() {
		this.loadEmail();
    },
    destroyed() {
        this.$router.push('/email')
    },
	watch: {
		'$route.params.emailId'() {
			this.loadEmail();
		},
	},
};
