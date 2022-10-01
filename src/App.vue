<template>
  <v-app id="inspire">
    <app-header />

    <v-main style="background: #edfffd">
      <router-view />
    </v-main>

    <app-footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import AppHeader from "@/layout/AppHeader.vue";
import AppFooter from "@/layout/AppFooter.vue";

Component({
  components: {
    AppHeader,
    AppFooter,
  },
});

export default Vue.extend({
  name: "App",
  components: { AppFooter, AppHeader },
  data: () => ({
    //
  }),
});
</script>
