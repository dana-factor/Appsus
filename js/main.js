import { myRouter } from './routes.js';
import mainHeader from './cmps/‏‏main-header.cmp.js';
import mainFooter from './cmps/‏‏‏‏main-footer.cmp.js';

new Vue({
	el: '#app',
	router: myRouter,
	template: `
        <div>
			<div class="header-main-container container flex column">
				<main-header></main-header>
				<router-view />
			</div>
				<main-footer></main-footer>
		</div>
    `,
	components: {
		mainHeader,
		mainFooter,
	},
});
