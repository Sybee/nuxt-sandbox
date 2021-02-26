<template>
  <v-container>
    <h1 class="mb-10">
      <span>Index page</span>
      <v-btn color="primary" type="button" :disabled="true" @click.prevent="update">Update</v-btn>
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
import { mapGetters } from 'vuex'
import UsersWidget from '@/components/Widgets/UsersWidget'
import PostsWidget from '@/components/Widgets/PostsWidget'

export default {
  components: { UsersWidget, PostsWidget },
  data: () => ({}),
  computed: {
    // ...mapGetters({
    //   isButtonDisabled: 'executing',
    // }),
  },
  methods: {
    update() {
      console.log('update')
    },
  },
}
</script>
