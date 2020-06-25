export default {
	props: ['noteTypes'],
	template: `
        <section>
            <h2 @click="$emit('click')">Search!</h2>    
            <input type="text" placeholder="text?" v-model="filterBy.text" @input="emitFilter"/>
            <input type="text" placeholder="noteType?" v-model.number="filterBy.noteType" @input="emitFilter"/>
        </section>
    `,
	data() {
		return {
			filterBy: {
				text: '',
				noteType: '',
			},
		};
	},
	methods: {
		emitFilter() {
            console.log(this.filterBy);
			this.$emit('filtered', this.filterBy);
		},
	},
};
