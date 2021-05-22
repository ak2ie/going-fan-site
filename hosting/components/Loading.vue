<template>
  <v-overlay :value="loading">
    <v-progress-circular indeterminate size="64"></v-progress-circular>
  </v-overlay>
</template>

<script lang="ts">
import Vue from "vue";

export type DataType = {
  loading: boolean;
};

export default Vue.extend({
  data: (): DataType => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
});
</script>
