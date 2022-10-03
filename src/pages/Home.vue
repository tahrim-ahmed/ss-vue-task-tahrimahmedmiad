<template>
  <div class="home">
    <home-component />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HomeComponent from "@/components/HomeComponent.vue";

@Component({
  components: {
    HomeComponent,
  },
})
export default class Home extends Vue {}
</script>
