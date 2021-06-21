<template>
  <div class="mt-4">
    <div class="text-center">
      <NuxtLink to="/">
        <Logo style="width: 60px; height: 60px;" />
      </NuxtLink>
    </div>
    <b-card class="mx-auto" header="Login" style="width: 380px;">
      <b-form v-if="show" @submit="onSubmit" @reset="onReset">
        <b-form-group
          label="Email address:"
          label-for="email"
        >
          <b-form-input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          />
        </b-form-group>

        <b-form-group label="Password:" label-for="password">
          <b-form-input
            id="password"
            v-model="form.password"
            placeholder="Enter password"
            type="password"
            required
          />
        </b-form-group>

        <b-button type="submit" variant="primary" class="mr-auto">
          Submit
        </b-button>
        <div class="d-flex mt-2 justify-content-end">
          <span class="mr-1">If you are not a member,</span>
          <NuxtLink to="register" class="font-weight-bold">
            Register
          </NuxtLink>
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  data () {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
