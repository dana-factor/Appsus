import emailStatus from './‏‏‏‏email-status.cmp.js'

export default{
    props:['unreadCount'],
    template:`
        <nav class="email-side-nav flex column">
            <h2>E-mail App</h2>
            <button @click="compose"> Compose<i class="fas fa-plus"></i></button>
            <button>Inbox ({{unreadCount}}) <i class="fas fa-inbox"></i> </button>
            <!-- <button @click="showEmails"><i class="fas fa-inbox"></i>Inbox ({{unreadCount}})</button> -->
            <button>Stared <i class="fas fa-star"></i></button>
            <button>Sent Mail <i class="far fa-paper-plane"></i></button>
            <button>Drafts <i class="fab fa-firstdraft"></i></button>
            <email-status></email-status>
        </nav>
    `,
    data(){
        return{

        }
    },
    methods:{
        compose(){
            this.$emit('compose')
        },
        // showEmails(){
        //     this.$emit('showEmails')
        // }
    },
    created(){

    },
    components:{
        emailStatus
    }
}