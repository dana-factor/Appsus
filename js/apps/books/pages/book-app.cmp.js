import { bookService } from '../services/book.service.js';
import bookFilter from '../cmps/book-filter.cmp.js';
import bookList from '../cmps/book-list.cmp.js';
import bookAdd from '../cmps/book-edit.cmp.js';

export default {
	template: `
        <main class="book-app main-container container">
			<h1>UNDER CONSTUCTION</h1>
			<router-link to="/books">Books</router-link> 
            <book-filter @filtered="setFilter"></book-filter>
            <book-add @searched="searchGoogleBook" @added="addGoogleBook":googleBooks = googleBooks></book-add>
            <book-list v-if="books" :books="booksToShow"></book-list>
        </main>
    `,
	data() {
		return {
			books: null,
			filterBy: null,
			currBook: null,
			googleBooks: null,
		};
	},
	computed: {
		booksToShow() {
			const filterBy = this.filterBy;
			if (!filterBy) return this.books;

			var filteredBooks = this.books.filter((book) => {
				return book.title
					.toLowerCase()
					.includes(filterBy.searchStr.toLowerCase());
			});
			filteredBooks = filteredBooks.filter((book) => {
				if (!filterBy.priceRange) return true;
				else if (filterBy.priceRange === 'all') return book;
				else if (filterBy.priceRange === '1')
					return book.listPrice.amount <= 75;
				else if (filterBy.priceRange === '2')
					return book.listPrice.amount > 75 && book.listPrice.amount <= 150;
				else if (filterBy.priceRange === '3')
					return book.listPrice.amount > 150;
			});

			return filteredBooks;
		},
	},
	methods: {
		setFilter(filterBy) {
			this.filterBy = filterBy;
		},
		searchGoogleBook(searchStr) {
			bookService.getGoogleBooks().then((books) => {
				let filteredBooks = books.items.filter((book) => {
					return book.volumeInfo.title
						.toLowerCase()
						.includes(searchStr.toLowerCase());
				});
				this.googleBooks = filteredBooks;
			});
		},
		addGoogleBook(googleBook) {
			bookService.addGoogleBook(googleBook);
		},
	},
	created() {
		bookService.getBooks().then((books) => {
			this.books = books;
		});
	},
	components: {
		bookFilter,
		bookList,
		bookAdd,
	},
};
