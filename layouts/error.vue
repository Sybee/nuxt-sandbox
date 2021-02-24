<template>
  <div class="error-page" style="text-align: center;">
    <h1>Error page</h1>

    <h3>{{ error.statusCode }}</h3>
    <h4>{{ error.message }}</h4>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>

<style>
.error-page {
  background-color: lightblue;
}
</style>
