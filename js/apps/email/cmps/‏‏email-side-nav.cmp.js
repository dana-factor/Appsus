import emailStatus from './‏‏‏‏email-status.cmp.js'

export default{
    props:['unreadCount'],
    template:`
        <nav class="email-side-nav flex column">
            <h2>Trip inTouch</h2>

            <router-link to="/email/compose"><button @click="updateDisplay('edit')"><span>Compose </span><i class="fas fa-plus"></i></button></router-link>
            <button @click="updateDisplay('listAndFilter'); setDisplayGroup('incoming')"><span>Inbox [{{unreadCount}}] </span><i class="fas fa-inbox"></i></button>
            <!-- <button @click="showEmails"><i class="fas fa-inbox"></i>Inbox ({{unreadCount}})</button> -->
            <button @click="setDisplayGroup('stared'); updateDisplay('listAndFilter')"><span>Stared </span><i class="fas fa-star"></i></button>
            <button @click="setDisplayGroup('outgoing'); updateDisplay('listAndFilter')"><span>Sent Mail </span><i class="far fa-paper-plane"></i></button>
            <button @click="setDisplayGroup('draft'); updateDisplay('listAndFilter')"><span>Drafts </span><i class="fab fa-firstdraft"></i></button>
            <email-status></email-status>
        </nav>
    `,
    data(){
        return{

        }
    },
    methods:{
        updateDisplay(main){
            this.$emit('updateDisplay', main)
        },
        setDisplayGroup(group){
            this.$emit('setDisplayGroup', group)
        }
    },
    created(){

    },
    components:{
        emailStatus
    }
}