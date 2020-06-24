import { emailService } from '../services/email.service.js';

export default {
	template: `
        <section v-if="email" class="email-details">
            <h3>{{email.subject}}</h3>
            <!-- <i :class=isStar></i> -->
            <h4>{{email.sentFrom.name}}</h4>
            <h4>{{email.sentFrom.adrress}}</h4>
            <p>{{email.sentAt}}</p>
            <p>{{email.body}}</p>
        </section>
    `,
    data(){
        return{
            email: null,
            prevEmailId: null,
            nextEmailId: null,
        }
    },
    computed: {
        isStar(){
            if (!this.email) return
            return (this.email.isStar) ? 'far fa-star' : 'fas fa-star';
        }

    },
    methods: {
        loadEmail() {
            const { emailId } = this.$route.params;
            
            emailService.getEmailById(emailId)
            .then(email => {
                console.log(email);
                this.email = email;
      
                emailService.getPrevEmailId(this.email.id)
                    .then(emailId => {
                      this.prevEmailId = emailId;   
                })
                    
                emailService.getNextEmailId(this.email.id)
                    .then(emailId => {
                        this.nextEmailId = emailId;  
                })
            })
        }
    },
    created() {
        this.loadEmail()
    },
    watch: {
        '$route.params.emailId'() {
            this.loadEmail();
        }
    }
};