<template>
  <div>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="News App"
          class="shrink mr-2"
          contain
          :src="require('@/assets/news-logo.png')"
          transition="scale-transition"
          width="60"
        />
        NEWS APP
      </div>

      <v-spacer></v-spacer>
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary right width="325">
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="require('@/assets/news-logo.png')"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> News App </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="blue--text">
          <v-list-item link class="menu-item">
            <v-list-item-title>
              <router-link to="/" class="d-block">
                <span>Home</span>
              </router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item link class="menu-item">
            <v-list-item-title>
              <router-link to="/history" class="d-block">
                <span>History</span>
              </router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-item * {
  font-size: 16px;
  text-decoration: none;
  padding: 10px 0;
}
</style>
