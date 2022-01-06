<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>History</h1>
        <ul>
          <li>History 1</li>
          <li>History 2</li>
          <li>History 3</li>
          <li>History 4</li>
          <li>History 5</li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({}),
  mounted() {
    // eslint-disable-next-line no-console
    console.log(process.env.VUE_APP_NEWS_API_KEY);
  },
};
</script>
