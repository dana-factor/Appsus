import { myRouter } from './routes.js';

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
});
