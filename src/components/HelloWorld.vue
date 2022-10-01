<template>
  <v-container>
    <v-row>
      <v-col> Welcome </v-col>
      <v-col>
        <img src="team.png" width="90%" class="mt-5" />
      </v-col>
    </v-row>
    <v-divider class="ma-10" />
    <v-row>
      <v-col class="col-6">
        <v-card
          class="mx-auto"
          width="100%"
          outlined
          elevation="9"
          href="/staffs"
        >
          <v-list-item two-line>
            <v-list-item-content>
              <div class="text-overline mb-4">Admin</div>
              <v-list-item-title class="text-h5 mb-1">
                We have {{ getAdmins() }} numbers of
                <span class="font-weight-bold blue--text">ADMIN</span>
              </v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar tile size="120">
              <img src="admin.png" />
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col class="col-6">
        <v-card
          class="mx-auto"
          width="100%"
          outlined
          elevation="9"
          href="/staffs"
        >
          <v-list-item two-line>
            <v-list-item-content>
              <div class="text-overline mb-4">Employee</div>
              <v-list-item-title class="text-h5 mb-1">
                We have {{ getEmployees() }} numbers of
                <span class="font-weight-bold blue--text">EMPLOYEE</span>
              </v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar tile size="120">
              <img src="admin.png" />
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default class HelloWorld extends Vue {
  getAdmins(): number {
    return this.$store.getters.getAdmins.length;
  }

  getEmployees(): number {
    return this.$store.getters.getEmployees.length;
  }
}
</script>
