import homePage from './pages/home-page.cmp.js';
import aboutUs from './pages/about-us.cmp.js';
import bookApp from './apps/books/pages/book-app.cmp.js';
import bookDetails from './apps/books/pages/‏‏book-details.cmp.js';
import emailApp from './apps/email/pages/email-app.cmp.js';
import emailDetails from './apps/email/pages/email-details.cmp.js';
import emailAdd from './apps/email/pages/email-add.cmp.js';
import noteApp from './apps/notes/pages/note-app.cmp.js';
// import noteDetails from './apps/notes/pages/note-details.cmp.js';

const myRoutes = [
	{
		path: '/',
		component: homePage,
	},
	{
		path: '/about',
		component: aboutUs,
	},
	{
		path: '/books',
		component: bookApp,
	},
	{
		path: '/book/:bookId',
		component: bookDetails,
	},
	{
		path: '/email',
		component: emailApp,
		children: [
            {
                path: '/email/:emailId',
                component: emailDetails,
            },
            {
                path: '/email/compose',
                component: emailAdd,
            },
        ]
	},
	// {
	// 	path: '/email/:emailId',
	// 	component: emailDetails,
	// },
	{
		path: '/notes',
		component: noteApp
	},
	// {
	// 	path: '/note/:noteId',
	// 	component: noteDetails,
	// },
];

export const myRouter = new VueRouter({ routes: myRoutes });
