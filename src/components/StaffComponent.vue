<template>
  <v-container>
    <v-data-table :headers="headers" :items="staffs" sort-by="id">
      <template v-slot:top>
        <v-toolbar flat>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" width="500" persistent>
            <v-toolbar dense>
              <v-spacer />
              <v-btn icon @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on">
                New Staff
              </v-btn>
            </template>

            <v-card>
              <add-component />
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template>
        <v-icon small class="mr-2"> mdi-pencil </v-icon>
        <v-icon small> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import AddComponent from "@/components/forms/AddComponent.vue";

@Component({
  components: {
    AddComponent,
  },
})
export default class StaffComponent extends Vue {
  dialog = false;

  headers: any = [
    { text: "Staff ID", align: "start", sortable: true, value: "id" },
    { text: "First Name", sortable: false, value: "firstName" },
    { text: "Last Name", sortable: false, value: "lastName" },
    { text: "Contact No", sortable: false, value: "contact" },
    { text: "Email", sortable: false, value: "email" },
    { text: "Actions", sortable: false, value: "actions" },
  ];
  staffs: any = [];
}
</script>
