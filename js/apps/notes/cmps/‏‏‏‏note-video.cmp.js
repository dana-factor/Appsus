export default {
	props: ['info'],
	template: `
        <section class="note-video">
        <iframe width="100%" :src="'https://www.youtube.com/embed/'+info.videoId" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
          `,
	computed: {},
	methods: {},
};
