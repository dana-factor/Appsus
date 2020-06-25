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
}