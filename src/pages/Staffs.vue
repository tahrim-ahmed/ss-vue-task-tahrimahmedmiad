<template>
  <div class="staff">
    <v-container>
      <v-card elevation="9">
        <v-tabs color="deep-purple accent-4" @change="(e) => (selectedTab = e)">
          <v-tab>Admin</v-tab>
          <v-tab>Employee</v-tab>

          <v-tab-item>
            <v-container fluid>
              <v-row>
                <staff-component :selected-tab="selectedTab" />
              </v-row>
            </v-container>
          </v-tab-item>
          <v-tab-item>
            <v-container fluid>
              <v-row>
                <staff-component :selected-tab="selectedTab" />
              </v-row>
            </v-container>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import StaffComponent from "@/components/StaffComponent.vue";

@Component({
  components: {
    StaffComponent,
  },
})
export default class Staffs extends Vue {
  selectedTab = 0;
}
</script>
