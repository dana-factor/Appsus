import { myRouter } from './routes.js';
import mainHeader from './cmps/‏‏main-header.cmp.js';
import mainFooter from './cmps/‏‏‏‏main-footer.cmp.js';

new Vue({
	el: '#app',
	router: myRouter,
	template: `
        <main>
            <main-header></main-header>
            <router-view />
            <main-footer></main-footer>
        </main>
    `,
	components: {
		mainHeader,
		mainFooter
	},
});
