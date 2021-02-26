<template>
  <v-container>
    <v-btn color="primary" type="button" :disabled="$store.state.counter > 0">REQUEST PROCESSING INDICATION</v-btn>

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
