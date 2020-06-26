export default {
	props: ['info', 'isEdit'],
	template: `
        <section class="note-video">
            <iframe width="100%" :src="'https://www.youtube.com/embed/'+info.videoId" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <input type="text" v-if="isEdit" v-model="videoData" @input="onInput"/>
        </section>
		  `,
	created() {
		if (!this.info.videoId) this.videoData = '';
	},
	data() {
		return {
			videoData: 'https://www.youtube.com/watch?v=' + this.info.videoId,
		};
	},
	methods: {
		onInput() {
			let urlParams = new URLSearchParams(
				this.videoData.substring(this.videoData.indexOf('?'))
			);
			if (urlParams.has('v')) {
				this.info.videoId = urlParams.get('v');
			} else this.info.videoId = this.videoData;
		},
	},
};
