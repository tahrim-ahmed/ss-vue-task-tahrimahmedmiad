<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="staffs"
      sort-by="id"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-spacer></v-spacer>
          <v-btn color="primary" dark class="mb-2"> New Staff </v-btn>
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

export default class StaffComponent extends Vue {
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