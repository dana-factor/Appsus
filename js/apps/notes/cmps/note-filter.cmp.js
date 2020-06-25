export default {
	props: ['noteTypes'],
	template: `
        <section class="note-filter">
			<h3>Note Search</h3>    
			<label>Text: </label>
            <input type="text" placeholder="Text" v-model="filterBy.text" @input="emitFilter"/>
			<!-- <input type="text" placeholder="noteType?" v-model.number="filterBy.noteType" @input="emitFilter"/> -->
			<label>Type: </label>
			<select v-model="filterBy.noteType" @change="emitFilter">
			<option></option>
				<option value="noteText">Text</option>
				<option value="noteTodos">Todos</option>
				<option value="noteImg">Image</option>
				<option value="noteVideo">Video</option>
			</select>
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
			this.$emit('filtered', this.filterBy);
		},
	},
};
