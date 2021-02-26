<template>
  <div>
    <v-fade-transition mode="out-in">
      <v-skeleton-loader v-if="loading" class="elevation-2 mb-6" boilerplate type="article, actions"></v-skeleton-loader>
      <v-card v-else>
        <v-card-title>Posts Widget</v-card-title>
        <v-card-text>
          <v-simple-table>
            <thead>
              <tr>
                <th class="text-left">ID</th>
                <th class="text-left">Title</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="post in posts" :key="post.id">
                <td>{{ post.id }}</td>
                <td>{{ post.title }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-card-text>
      </v-card>
    </v-fade-transition>
  </div>
</template>

<script>
import postService from '@/services/api/postService'

export default {
  data: () => ({
    loading: false,
    posts: [],
  }),
  async created() {
    try {
      this.loading = true

      const { data } = await postService.getPosts()

      this.posts = data.splice(0, 10) // Первые 10
    } catch (error) {
      console.log(error)
    } finally {
      this.loading = false
    }
  },
}
</script>

<style>

</style>
