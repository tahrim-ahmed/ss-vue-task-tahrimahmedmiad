<template>
  <div class="staff">
    <v-container>
      <v-card elevation="9">
        <v-tabs color="deep-purple accent-4">
          <v-tab>Admin</v-tab>
          <v-tab>Employee</v-tab>

          <v-tab-item>
            <v-container fluid>
              <v-row>
                <staff-component />
              </v-row>
            </v-container>
          </v-tab-item>
          <v-tab-item>
            <v-container fluid>
              <v-row>
                <staff-component />
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
  /*created() {}

  editItem(item: any) {}

  deleteItem(item: any) {}

  deleteItemConfirm() {}

  close() {}

  closeDelete() {}

  save() {}*/
}
</script>
