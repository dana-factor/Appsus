// import { eventBus } from '../../../services/eventbus.service.js';
// import { eventBus, EVENT_EMAIL_REMOVED } from '../../../services/eventbus.service.js';

export default {
    props:['email'],
    template: `
        <i v-if="email" @click="removeEmail(email.id)" class="email-remove far fa-trash-alt"></i>
    `,
    data() {
		return {
			email: null,
		};
	},

    methods: {
        removeEmail(emailId){
            this.$emit('emailRemoved', emailId)
        },
    },
    // created() {
    //     eventBus.$on('email-removed', ((emailId)=>{
    //         removeEmail(emailId)
    //         // eventBus.$emit('email-removed', this.email.id)
    //     }))
    // },
}