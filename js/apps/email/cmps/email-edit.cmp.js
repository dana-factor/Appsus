import emailRemove from '../cmps/email-remove.cmp.js';
import emailStarToggle from '../cmps/email-star-toggle.cmp.js';
import emailAdd from '../pages/email-add.cmp.js'

export default {
    props:['email'],
    template: `
        <section class="email-edit">
            <email-add v-if="!email" @emailSent="sendEmail"></email-add>
            <div v-else>
                <email-remove @emailRemoved="removeEmail(emailId)" :email="email"></email-remove>
                <email-star-toggle @staredToggled="toggleEmailStared(emailId)" :email="email"></email-star-toggle>
            </div>
        </section>
    `,
    data(){
        return{
        }
    },
    methods: {
        toggleEmailStared(emailId){
            this.$emit('staredToggled', emailId)
        },
        removeEmail(emailId){
            this.$emit('emailRemoved', emailId)
        },
        sendEmail(email){
            this.$emit('emailSent', email)
        }
    },
    components: {
		emailRemove,
        emailStarToggle,
        emailAdd
	},
}