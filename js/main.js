import { myRouter } from './routes.js';
import mainHeader from './cmps/‏‏main-header.cmp.js';
import mainFooter from './cmps/‏‏‏‏main-footer.cmp.js';

new Vue({
	el: '#app',
	router: myRouter,
	template: `
        <div>

				<main-header></main-header>

			<main class="main-content">

					<router-view />

			</main>

				<main-footer></main-footer>

		</div>
    `,
	components: {
		mainHeader,
		mainFooter,
	},
});
