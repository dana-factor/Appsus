export default {
	props: ['noteTypes'],
	template: `
        <section class="note-filter">
			<fieldset>
    			<legend>Note Search:</legend>
			<!-- <div class="flex justify-center align-center"> -->
				<!-- <label>Text: </label> -->
				<input type="text" placeholder="Search in notes..." v-model="filterBy.text" @input="emitFilter"/>
			<!-- </div> -->
			<!-- <input type="text" placeholder="noteType?" v-model.number="filterBy.noteType" @input="emitFilter"/> -->
			<!-- <div class="flex justify-center align-center"> -->
				<!-- <label>Type:</label> -->
				<select v-model="filterBy.noteType" @change="emitFilter">
					<option value="" selected>All Notes</option>
					<option value="noteText">Text</option>
					<option value="noteTodos">Todos</option>
					<option value="noteImg">Image</option>
					<option value="noteVideo">Video</option>
				</select>
			<!-- </div> -->
			</fieldset>
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
