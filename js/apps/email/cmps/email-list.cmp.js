import emailPreview from './email-preview.cmp.js';

export default{
    props: ['emails'],
    template: `
        <ul class="email-list clean-list flex column space-between">
            <email-preview @updateEmailRead="updateEmailRead" v-for="email in emails" :key="email.id" :email=email></email-preview>
        </ul>
    `,
    methods: {
        updateEmailRead(emailId, status){
            this.$emit('updateEmailRead', emailId, status)
        }
    },
    components: {
        emailPreview
    }
};