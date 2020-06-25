export default {
    props:['email'],
    template: `
        <i v-if="email" class="email-star-toggle" :class=isStared @click="toggleEmailStared(emailId)"></i>
    `,
    data() {
		return {
			email: null,
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
        },
    },
}