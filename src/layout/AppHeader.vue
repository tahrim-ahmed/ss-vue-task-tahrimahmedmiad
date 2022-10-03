<template>
  <v-app-bar
    app
    flat
    style="background: linear-gradient(to right, #fc00ff, #00dbde)"
  >
    <v-container class="py-0 fill-height">
      <v-avatar class="mr-3">
        <img src="./images/Staff-remove.png" alt="Logo" />
      </v-avatar>
      <router-link
        to="/"
        class="font-weight-bold black--text ml-0 pl-0"
        style="text-decoration: none"
      >
        Staff Management System
      </router-link>

      <v-spacer></v-spacer>

      <v-btn class="font-weight-bold" href="/" text> Home </v-btn>
      <v-btn class="font-weight-bold" href="/staffs" text> Staffs </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class AppHeader extends Vue {}
</script>
