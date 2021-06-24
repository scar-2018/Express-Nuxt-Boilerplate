<template>
  <div class="mt-4">
    <div class="text-center">
      <NuxtLink to="/">
        <Logo style="width: 60px; height: 60px;" />
      </NuxtLink>
    </div>
    <b-card class="mx-auto" header="Login" style="width: 380px;">
      <validation-observer ref="form" v-slot="{ handleSubmit }">
        <b-form @submit.prevent="handleSubmit(onSubmit)">
          <validation-provider
            name="Email"
            rules="required|email"
            v-slot="validationContext"
          >
            <b-form-group label="Email address:" label-for="email">
              <b-form-input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
                @input="CLEAR_ERROR"
                :state="getValidationState(validationContext)"
              />
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <validation-provider
            name="Password"
            rules="required"
            v-slot="validationContext"
          >
            <b-form-group label="Password:" label-for="password">
              <b-form-input
                id="password"
                v-model="form.password"
                placeholder="Enter password"
                type="password"
                @input="CLEAR_ERROR"
                :state="getValidationState(validationContext)"
              />
              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <b-alert v-if="error" variant="danger" show>
            {{ error.message }}
          </b-alert>

          <b-button type="submit" variant="primary" class="mr-auto" :disabled="submittingAuth">
            <b-spinner v-if="submittingAuth" small />
            Login
          </b-button>
          <div class="d-flex mt-2 justify-content-end">
            <span class="mr-1">If you are not a member,</span>
            <NuxtLink to="register" class="font-weight-bold">
              Register
            </NuxtLink>
          </div>
        </b-form>
      </validation-observer>
    </b-card>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  layout: 'auth',
  middleware: 'auth',
  meta: {
    requiresGuest: true
  },
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapState('auth', ['submittingAuth', 'error'])
  },
  mounted () {
    this.CLEAR_ERROR()
  },
  methods: {
    ...mapActions('auth', ['login']),
    ...mapMutations('auth', ['CLEAR_ERROR']),
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null
    },
    onSubmit() {
      this.CLEAR_ERROR()
      this.login(this.form)
    }
  }
}
</script>
