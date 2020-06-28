export default{
    template: `
        <section class="email-filter flex">
            <div class="search-input flex">
                <i class="fa fa-search"></i>
                <input type="text" placeholder="Search" v-model="filterBy.searchStr" @input="filter"/>
            </div>
            <select v-model="filterBy.isRead" @input="filter">
                <option value = "all" >All</option>
                <option value = "read" >Read</option>
                <option value = "unread" >Unread</option>
            </select>
        </section>   
    `,  
    data(){
        return{
            filterBy: {
                searchStr: '',
                isRead: 'all'
            }
        }
    },
    methods: {
        filter() {
            this.$emit('filtered', this.filterBy);
        }
    }
}