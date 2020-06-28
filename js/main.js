import { myRouter } from './routes.js';
import mainHeader from './cmps/‏‏main-header.cmp.js';
import mainFooter from './cmps/‏‏‏‏main-footer.cmp.js';
import {eventBus} from '../js/services/eventbus.service.js';

new Vue({
	el: '#app',
	router: myRouter,
	template: `
        <div>
				<main-header></main-header>
				<router-view />
				<main-footer></main-footer>
		</div>
    `,
	components: {
		mainHeader,
		mainFooter,
	},
});
