export default {
    props:['email'],
    template: `
        <i v-if="email" class="email-star-toggle" :class=isStared @click.stop="toggleEmailStared"></i>
    `,
    data() {
		return {
			// email: null,
		};
	},
	computed: {
		isStared() {
			return this.email.isStared ? 'fas fa-star' : 'far fa-star';
        },
	},
    methods: {
        toggleEmailStared(){
            this.$emit('staredToggled', this.email.id)
        },
    },
}