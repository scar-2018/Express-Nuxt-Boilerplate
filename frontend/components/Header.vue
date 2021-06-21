<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-container>
        <b-navbar-brand to="/">
          Nuxt
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse" />
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/login">
              Login
            </b-nav-item>
            <b-nav-item to="/register">
              Register
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>
