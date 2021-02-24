<template>
  <v-container>
    <h1 class="mb-10">Index page</h1>

    <v-row>
      <v-col sm=3>
        <UsersWidget />
      </v-col>
      <v-col sm=3>
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
}
</script>
