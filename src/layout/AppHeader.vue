<template>
  <v-app-bar app color="primary" flat>
    <v-container class="py-0 fill-height">
      <v-avatar class="mr-10">
        <img src="./images/Staff-remove.png" alt="Logo" />
      </v-avatar>

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
