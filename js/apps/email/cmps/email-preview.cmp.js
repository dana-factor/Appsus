export default{
    props: ['email'],
    template: `
            <li class="email-preview">
                    <router-link :to="'/email/' + email.id" >
                        <h4 @click="updateEmailRead(email, true)">{{email.subject}}</h4>
                    </router-link> 
                    <i :class="isRead" @click="updateEmailRead(email, false)"></i>
            </li>
      `,
    computed: {
        isRead(){
            return (this.email.isRead) ? 'far fa-envelope-open' : 'fas fa-envelope';
        },
    },
    methods: {
        updateEmailRead(email, status){
            if (email.isRead && status===true) return
            this.$emit('updateEmailRead', email.id, status)
        }
    }
  };