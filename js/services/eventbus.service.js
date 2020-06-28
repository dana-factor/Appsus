const bus = new Vue();

bus.$on('showBigImg', (url) => {
	Swal.fire({
		imageUrl: url,
		// imageWidth: '1000',
		// imageHeight: '1000',
        imageAlt: 'image',
        showConfirmButton: false,
		showCancelButton: true,
		cancelButtonText: 'Close',
	});
});

bus.$on('showMessage', (title) => {
	Swal.fire({
		position: 'top',
		icon: 'info',
		title,
		showConfirmButton: false,
		timer: 1000
	  })
});

export const eventBus = bus;
