import { bookService } from '../services/book.service.js';

export default {
	props: ['review'],
	template: `
    <li>
        <h4>{{review.writenBy}}'s review:</h4>
        <h5>Rate:</h5> <p>{{review.rate}}</p>
        <h5>Read at:</h5> <p>{{review.readAt}}</p>
        <p>{{review.review}}</p>

    </li>
        
    `,
	created() {
		const { bookId } = this.$route.params;
		bookService.getBookById(bookId).then((book) => {
			this.review = book;
		});
	},
};
