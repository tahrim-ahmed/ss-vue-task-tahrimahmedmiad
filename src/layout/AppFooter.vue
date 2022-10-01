<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="teal">
        <strong class="subheading"
          >Get connected with me on social networks!</strong
        >

        <v-spacer></v-spacer>

        <v-btn class="mx-4" dark icon @click="gotoFacebook">
          <v-icon size="24px"> mdi-facebook </v-icon>
        </v-btn>
        <v-btn class="mx-4" dark icon @click="gotoLinkedin">
          <v-icon size="24px"> mdi-linkedin </v-icon>
        </v-btn>
        <v-btn class="mx-4" dark icon @click="gotoGithub">
          <v-icon size="24px"> mdi-github </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Tahrim Ahmed Miad</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class AppFooter extends Vue {
  gotoFacebook(): void {
    window.open("https://facebook.com/pranhinmiad");
  }

  gotoLinkedin(): void {
    window.open("https://www.linkedin.com/in/tahrim-ahmed-miad-b523bb117");
  }

  gotoGithub(): void {
    window.open("https://github.com/tahrim-ahmed");
  }
}
</script>
