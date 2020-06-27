export default {
	props: ['title', 'text', 'confirmButtonText'],
	template: `<span></span>`,
	created() {
		Swal.fire({
			title: this.title,
			text: this.text,
			confirmButtonText: this.confirmButtonText,
		});
	},
};
