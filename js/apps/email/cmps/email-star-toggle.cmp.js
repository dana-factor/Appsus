import { eventBus } from '../../../services/eventbus.service.js';
// import { eventBus, EVENT_EMAIL_STAR_TOGGLED } from '../../../services/eventbus.service.js';
export default {
    props:['email'],
    template: `
        <i v-if="email" class="email-star-toggle" :class=isStared @click="toggleEmailStared(emailId)"></i>
    `,
    data() {
		return {
			email: null,
			// prevEmailId: null,
			// nextEmailId: null,
		};
	},
	computed: {
		isStared() {
			return this.email.isStared ? 'fas fa-star' : 'far fa-star';
        },
	},
    methods: {
        toggleEmailStared(emailId){
            this.$emit('staredToggled', emailId)
            // emailService.toggleEmailStared(this.email.id)
        },
    },
    // created() {
    //     eventBus.$on('star-toggled', ((emailId)=>{
    //         console.log('&&&&');
            
    //         this.toggleEmailStared(emailId)
    //         // eventBus.$emit('star-toggled', this.email.id)
    //     }))
    // },
}