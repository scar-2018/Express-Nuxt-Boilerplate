<template>
  <div class="d-flex justify-content-center align-center mt-5">
    <div>
      <Logo />
      <h1 class="title">
        Home Page
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'authenticated'
}
</script>
