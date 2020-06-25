import { emailService } from '../services/email.service.js';
// import { eventBus } from '../../../services/eventbus.service.js';

export default {
	template: `
        <section v-if="email" class="email-details">
        <nav>
            <router-link v-if="prevEmailId" :to="'/email/' + prevEmailId">Previous Email</router-link> |
            <router-link v-if="nextEmailId" :to="'/email/' + nextEmailId">Next Email</router-link>
        </nav>
        <h3>{{email.subject}}</h3>
        <i :class=isStared @click="toggleStared"></i>
        
            <router-link v-if="nextEmailId" :to="'/email/' + nextEmailId"><i @click="removeEmail" class="far fa-trash-alt"></i></router-link>
        
        
        <h4>{{email.sentFrom.name}}</h4>
        <h4>{{email.sentFrom.adrress}}</h4>
        <p>{{email.sentAt}}</p>
        <p>{{email.body}}</p>
        </section>
    `,
	data() {
		return {
			email: null,
			prevEmailId: null,
			nextEmailId: null,
		};
	},
	computed: {
		isStared() {
			return this.email.isStared ? 'fas fa-star' : 'far fa-star';
        },
	},
	methods: {
        toggleStared(){
            console.log('Dana Banana');
            
            // eventBus.$emit('star-toggled', this.email.id)
            emailService.toggleEmailStared(this.email.id)
        },
        removeEmail(){
            // eventBus.$emit('email-removed', this.email.id)
            emailService.removeEmail(this.email.id)
            // this.$route.params=this.nextEmailId
        },
		loadEmail() {
			const { emailId } = this.$route.params;

            emailService.getEmailById(emailId)
                .then((email) => {
				    this.email = email;

                    emailService.getPrevEmailId(this.email.id)
                        .then((emailId) => {
                            this.prevEmailId = emailId;
                            console.log('prev emailId',this.prevEmailId);
                        
                    });

                    emailService.getNextEmailId(this.email.id)
                        .then((emailId) => {
                            this.nextEmailId = emailId;
                            console.log('next',this.nextEmailId);
                    });
			});
        },
	},
	created() {
		this.loadEmail();
	},
	watch: {
		'$route.params.emailId'() {
			this.loadEmail();
		},
	},
};
