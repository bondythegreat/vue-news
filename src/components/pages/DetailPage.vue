<template>
  <v-container class="my-4">
    <v-row>
      <v-col>
        <v-btn color="blue" class="mb-4" fab dark small top left @click="gotHome">
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="12" md="12" lg="12" v-if="detail">
        <div class="hero mb-6">
          <v-img
            height="350"
            :lazy-src="require('@/assets/default-image.png')"
            :src="detail.urlToImage ? detail.urlToImage : require('@/assets/default-image.png')"
          >
          </v-img>
        </div>

        <div class="text-center mb-6">
          <h1 class="font-weight-bold mb-5">{{ detail.title }}</h1>
          <h2 class="subtitle-1">{{ detail.author }}</h2>
          <div class="subtitle-2">{{ publishedDate }}</div>
        </div>

        <div class="body-1">
          {{ detail.description }}
        </div>
      </v-col>

      <v-col v-else>
        <v-alert dense outlined type="error" class="mt-4 d-block">
          Detail is not found (vuex not persistent). Please go back to
          <router-link to="/">Homepage</router-link>
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'DetailPage',

  data() {
    return {
      detail: null,
    };
  },
  mounted() {
    const { idx } = this.$route.params;
    this.detail = this.getDetail(idx);
  },
  computed: {
    ...mapGetters({
      getDetail: 'news/getDetail',
    }),
    publishedDate() {
      return new Date(this.detail.publishedAt);
    },
  },
  methods: {
    gotHome() {
      this.$router.push({
        path: '/',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  line-height: 1.2em;
}
</style>
