<template>
  <v-container class="my-4">
    <v-flex class="text-center" v-if="isLoading">
      <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
    </v-flex>
    <v-layout row wrap v-else>
      <v-flex xs12 sm6 md4 lg3 v-for="(newsItem, idx) in newsList" :key="idx">
        <v-card class="ma-3">
          <v-responsive>
            <v-img
              height="150"
              :lazy-src="require('@/assets/default-image.png')"
              :src="
                newsItem.urlToImage ? newsItem.urlToImage : require('@/assets/default-image.png')
              "
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-responsive>
          <v-card-text center>
            <h2 class="text-subtitle-1 title">{{ newsItem.title }}</h2>
          </v-card-text>
          <v-card-actions>
            <news-actions :news="newsItem" :idx="idx" />
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import NewsActions from '../NewsActions.vue';

export default {
  name: 'TheHomepage',
  components: { NewsActions },
  data() {
    return {};
  },
  mounted() {
    this.getTopHeadlines();
  },
  computed: {
    ...mapState({
      newsList: (state) => state.news.newsList,
      isLoading: (state) => state.general.loading,
    }),
  },
  methods: {
    ...mapActions({
      getTopHeadlines: 'news/getTopHeadlines',
    }),
  },
};
</script>

<style lang="scss" scoped>
.title {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: rgba(0, 0, 0, 1);
}
</style>
