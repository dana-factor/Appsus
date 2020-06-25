export default {
	props:['notes'],
	template: `
    <section class="note-edit">
		{{$route.params.noteId}}
		<form>
		<!-- <select>
		<option v-for="type in types">{{type}}</option>
		</select> -->
		<!-- {{notes}} -->
			<input placeholder="Title"/>
			<input placeholder="Body"/>
			<button @click="$emit('save','s')">Save</button>
		</form>
    </section>
	`,
	methods: {
		updateEditNote(id) {
			console.log(id);
			
		},
	},
	created() {
		this.updateEditNote(this.$route.params.noteId);
	},
	watch: {
		'$route.params.noteId'(newId) {
			this.updateEditNote(newId);
		},
	},
};
