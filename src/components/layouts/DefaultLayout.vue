<template>
  <v-container>
    <the-header />
    <v-main>
      <router-view />
    </v-main>

    <v-snackbar v-model="error" top center color="red accent-2" timeout="5000">
      {{ error }}
      <template v-slot:action="{ attrs }">
        <v-btn color="black" text v-bind="attrs" @click="dismissError"> Close </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TheHeader from '../TheHeader.vue';

export default {
  components: { TheHeader },
  computed: {
    ...mapGetters({
      errorState: 'general/error',
    }),
    error: {
      get() {
        return this.errorState;
      },
      set(newName) {
        return newName;
      },
    },
  },
  methods: {
    ...mapActions({
      dismissError: 'general/dismissError',
    }),
  },
};
</script>
