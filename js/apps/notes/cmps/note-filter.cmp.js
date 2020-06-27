export default {
	props: ['noteTypes'],
	template: `
			<fieldset class="note-filter">
				<legend>Note Search</legend>
				<div class="flex space-evenly">
					<input type="text" placeholder="Search" v-model="filterBy.text" @input="emitFilter"/>
					<select v-model="filterBy.noteType" @change="emitFilter">
						<option value="" selected>All Notes</option>
						<option value="noteText">Text</option>
						<option value="noteTodos">Todos</option>
						<option value="noteImg">Image</option>
						<option value="noteVideo">Video</option>
					</select>
				</div>
			</fieldset>
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
