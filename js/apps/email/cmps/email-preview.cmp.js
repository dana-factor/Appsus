export default{
    props: ['email'],
    template: `
            <li class="email-preview flex space-between align-center">
                <div>
                    <i :class="isRead" @click="updateEmailRead(email, false)"></i>
                    <router-link :to="'/email/' + email.id" >
                        <h4 @click="updateEmailRead(email, true)">{{email.sentFrom.name}}:</h4>
                        <p> {{email.subject}}</p>
                        <!-- <p>{{date.getDate()}} - {{date.getMonth()}} - {{date.getFullYear}}</p> -->
                        
                    </router-link>
                </div> 
                <p>{{date.day}}.{{date.month}}.{{date.year}}</p>
            </li>
      `,
    data (){
        return{
            date:{
                day: new Date(this.email.sentAt).getDate(),
                month: new Date(this.email.sentAt).getMonth(),
                year: new Date(this.email.sentAt).getFullYear()
            }
        }
    },
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