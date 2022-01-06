<template>
  <v-container>
    <the-header />
    <v-main>
      <router-view />
    </v-main>
  </v-container>
</template>

<script>
import TheHeader from '../TheHeader.vue';

export default {
  components: { TheHeader },
};
</script>
