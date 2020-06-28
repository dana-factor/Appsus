export const EVENT_SHOW_MSG = 'show-msg';
export const EVENT_PUK = 'go-puk';

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

export const eventBus = bus;
