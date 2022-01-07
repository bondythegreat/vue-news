<template>
  <div>
    <v-btn text color="blue" @click.stop="openDialog">EDIT</v-btn>
    <v-btn text color="blue" @click="gotoDetail">DETAIL</v-btn>

    <v-dialog max-width="600" v-model="dialog">
      <template v-slot:default="dialog">
        <v-card>
          <v-form v-model="isFormValid">
            <v-toolbar color="primary" dark>Edit News Title</v-toolbar>
            <v-card-text class="pt-5">
              <label>Current title</label>
              <p>{{ news.title }}</p>
              <v-text-field label="New title*" v-model="newTitle" :rules="rules"></v-text-field>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn text @click="dialog.value = false">Cancel</v-btn>
              <v-btn text @click="saveTitle" :disabled="!isFormValid">Save</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </template>
    </v-dialog>
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
  data() {
    return {
      dialog: false,
      newTitle: '',
      rules: [
        (value) => !!value || 'Required.',
        (value) => (value || '').length <= 50 || 'Max 50 characters',
      ],
      isFormValid: false,
    };
  },
  methods: {
    ...mapActions({
      recordHistory: 'news/recordHistory',
      setNewsTitle: 'news/setNewsTitle',
    }),
    gotoDetail() {
      this.recordHistory(this.news);
      this.$router.push({
        path: `/detail/${this.idx}`,
      });
    },
    openDialog() {
      this.dialog = true;
    },
    saveTitle() {
      const data = {
        newsItem: this.news,
        newTitle: this.newTitle,
      };

      this.setNewsTitle(data);
      this.newTitle = '';
      this.dialog = false;
    },
  },
};
</script>
