<template>
  <v-container>
    <h1 class="mb-10">
      <span>Index page</span>
      <v-btn color="primary" type="button" :disabled="$store.state.counter > 0">Update</v-btn>
    </h1>

    <v-row>
      <v-col>
        <UsersWidget />
      </v-col>
      <v-col>
        <PostsWidget />
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import UsersWidget from '@/components/Widgets/UsersWidget'
import PostsWidget from '@/components/Widgets/PostsWidget'

export default {
  components: { UsersWidget, PostsWidget },
  data: () => ({}),
}
</script>
