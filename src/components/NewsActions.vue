<template>
  <div>
    <v-btn text color="blue">EDIT</v-btn>
    <v-btn text color="blue" @click="gotoDetail">DETAIL</v-btn>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'NewsActions',
  props: {
    idx: {
      type: Number,
      default: 0,
    },
    news: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    ...mapActions({
      recordHistory: 'news/recordHistory',
    }),
    gotoDetail() {
      this.recordHistory(this.news);
      this.$router.push({
        path: `/detail/${this.idx}`,
      });
    },
  },
};
</script>
