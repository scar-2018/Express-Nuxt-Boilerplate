<template>
  <div>
    <b-container>
      <h2>Users</h2>
      <b-table
        id="users-table"
        striped
        hover
        :items="users"
        :fields="fields"
      >
      </b-table>
      <b-pagination-nav
        v-model="page"
        :link-gen="linkGen"
        :number-of-pages="10"
        use-router
        @input="onPageChange"
      >
      </b-pagination-nav>
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
      page: this.$route.query.page || 1,
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
    const response = await this.$axios.get(`/users?page=${this.page}`)

    this.users = response.data.users
  },
  computed: {
    totalRows() {
      return this.users.length
    }
  },
  methods: {
    linkGen(pageNum) {
      return pageNum === 1 ? '?' : `?page=${pageNum}`
    },
    onPageChange(page) {
      this.$fetch()
    }
  }
}
</script>