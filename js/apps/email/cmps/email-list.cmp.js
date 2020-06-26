import emailPreview from './email-preview.cmp.js';
import { emailService } from '../services/email.service.js';

export default{
    props: ['emails'],
    template: `
        <ul class="email-list clean-list flex column space-between">
            <email-preview @updateEmailRead="updateEmailRead" v-for="email in emails" :key="email.id" :email=email></email-preview>
        </ul>
    `,

    // data(){
    //     return{
            
    //     }
    // },
    // computed: {
    //     incomingEmails: this.emails.map((email=>{
    //         email.sentTo === 'factor.dana@gmail.com'
    //     }))
    // },
    methods: {
        updateEmailRead(emailId, status){
            this.$emit('updateEmailRead', emailId, status)
        }
    },
    components: {
        emailPreview
    }
};