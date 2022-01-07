<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="mb-5">History</h1>

        <v-list two-line>
          <div :key="item.date" v-for="item in history">
            <v-divider />
            <v-list-item>
              <v-list-item-avatar tile>
                <img :src="item.news.urlToImage" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-subtitle>{{ item.date | renderDate }}</v-list-item-subtitle>
                <v-list-item-title>{{ item.news.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
          <v-divider />
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HistoryPage',
  computed: {
    ...mapGetters({
      history: 'news/getHistoryDesc',
    }),
  },
  filters: {
    renderDate(newsDate) {
      return new Date(newsDate);
    },
  },
};
</script>
