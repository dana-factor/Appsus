export default{
    props: ['email'],
    template: `
            <li class="email-preview">
              <!-- <router-link :to="'/email/' + email.id">see full screen</router-link>  -->
                <pre>{{email}}</pre>
                
            </li>
      `,
    computed: {

    },
  };
  