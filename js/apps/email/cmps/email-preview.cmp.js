export default{
    props: ['email'],
    template: `
            <li class="email-preview">
                <h4>{{email.subject}}
                    <i :class="isRead"></i>
                    <router-link :to="'/email/' + email.id"><i class="fas fa-expand"></i></router-link> 
                </h4> 
            </li>
      `,
    computed: {
        isRead(){
            return (this.email.isRead) ? 'far fa-envelope-open' : 'fas fa-envelope';
        }

    },
  };