export default {
	template: `
    <header class="">
        <div class="header-container container flex align-center space-between main-header">
            <h1>onTrip</h1>
            
            <nav>
                <router-link to="/">Home</router-link> |
                <router-link to="/email">Email</router-link> |
                <router-link to="/notes">Notes</router-link> |
                <router-link to="/books">Books</router-link> |
                <router-link to="/about">About</router-link>
            </nav>
        </div>
    </header>
    `,
};
