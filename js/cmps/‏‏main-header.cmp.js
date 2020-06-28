export default {
	template: `
    <header class="">
        <div class="header-container container flex align-center space-between main-header"  :class="{'menu-open':isMenuOpen}">
            <h1>onTrip</h1>
            
            <nav class="flex header-nav">
                    <router-link to="/">Home</router-link>
                    <router-link to="/email">Email</router-link>
                    <router-link to="/notes">Notes</router-link>
                    <router-link to="/about">About</router-link>
            </nav>
            <button @click="isMenuOpen=!isMenuOpen" class="menu-btn"></button>
        </div>
    </header>
    `,
	data() {
		return {
			isMenuOpen: false,
		};
	},
};
