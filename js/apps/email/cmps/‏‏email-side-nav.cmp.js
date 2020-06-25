import emailStatus from './‏‏‏‏email-status.cmp.js'

export default{
    props:['unreadCount'],
    template:`
        <nav class="email-side-nav">
            <button @click="compose"><i class="fas fa-plus"></i>Compose</button>
            <button><i class="fas fa-inbox"></i>Inbox ({{unreadCount}})</button>
            <button><i class="fas fa-star"></i> Stared</button>
            <button><i class="far fa-paper-plane"></i> Sent Mail</button>
            <button><i class="fab fa-firstdraft"></i>Drafts</button>
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
        }
    },
    created(){

    },
    components:{
        emailStatus
    }
}