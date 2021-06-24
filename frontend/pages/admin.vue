<template>
  <div>
    <b-container>
      <h2>Users</h2>
      <b-table striped hover :items="users" :fields="fields"></b-table>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  middleware: 'auth',
  meta: {
    requiresAdmin: true
  },
  data() {
    return {
      // Note 'isActive' is left out and will not appear in the rendered table
      fields: [
        {
          key: 'email',
          sortable: true
        },
        {
          key: 'username',
          sortable: false
        },
        {
          key: 'createdAt',
          label: 'Registed At',
          sortable: false
        }
      ],
      users: []
    }
  },
  async fetch() {
    const response = await this.$axios.get('/users')

    this.users = response.data.users
  },
  methods: {
  }
}
</script>