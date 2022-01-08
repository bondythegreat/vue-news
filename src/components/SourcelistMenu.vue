<template>
  <div class="text-right">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on"> FILTER BY SOURCE </v-btn>
      </template>
      <v-list>
        <v-virtual-scroll :items="items" :item-height="40" height="300">
          <template v-slot:default="{ item }">
            <v-list-item @click="sendToParent(item)">
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item>
          </template>
        </v-virtual-scroll>
      </v-list>
    </v-menu>
    <v-btn color="primary" class="ml-2" dark @click="resetFilter" v-if="isFiltered"> RESET </v-btn>
  </div>
</template>

<script>
export default {
  name: 'SourcelistMenu',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isFiltered: false,
    };
  },
  methods: {
    sendToParent(item) {
      this.isFiltered = true;
      this.$emit('onSourceSelected', item);
    },
    resetFilter() {
      this.isFiltered = false;
      this.$emit('onReset');
    },
  },
};
</script>
