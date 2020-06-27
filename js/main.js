import { myRouter } from './routes.js';
import mainHeader from './cmps/‏‏main-header.cmp.js';
import mainFooter from './cmps/‏‏‏‏main-footer.cmp.js';

new Vue({
	el: '#app',
	router: myRouter,
	template: `
        <div>
			<div class="header-container container">
				<main-header></main-header>
			</div>
				<div class="main-container container">
					<main class="main-content">
						<router-view />
					</main>
				</div>
			<div class="footer-container container">
				<main-footer></main-footer>
			</div>
		</div>
    `,
	components: {
		mainHeader,
		mainFooter,
	},
});
