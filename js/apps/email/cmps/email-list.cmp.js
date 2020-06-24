import emailPreview from './email-preview.cmp.js';

export default{
    props: ['emails'],
    template: `
        <ul class="email-list clean-list flex wrap align-center space-around">
            <email-preview v-for="email in emails" :key="email.id" :email=email></email-preview>
        </ul>
    `,
    methods: {
    },
    components: {
        emailPreview
    }
};