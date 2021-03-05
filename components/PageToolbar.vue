<template>
  <div class="page-toolbars">
    <v-toolbar v-if="$props.info" color="yellow">
      <v-toolbar-title>Toolbar info</v-toolbar-title>
    </v-toolbar>
    <v-toolbar v-if="$props.edit" color="pink">
      <v-toolbar-title>Toolbar edit</v-toolbar-title>
    </v-toolbar>
    <v-toolbar v-if="$props.add" color="green">
      <v-toolbar-title>Toolbar add</v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  props: {
    info: { type: Boolean, default: false },
    edit: { type: Boolean, default: false },
    add: { type: Boolean, default: false },
  },
}
</script>

<style>

</style>
