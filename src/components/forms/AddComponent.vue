<template>
  <v-container>
    <v-form>
      <v-text-field
        v-model="addStaff.id"
        :rules="[(v) => !!v || 'ID is required']"
        label="Staff ID"
        required
      ></v-text-field>

      <v-text-field
        v-model="addStaff.firstName"
        :rules="[(v) => !!v || 'First Name is required']"
        label="First Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="addStaff.lastname"
        :rules="[(v) => !!v || 'Last Name is required']"
        label="Last Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="addStaff.contact"
        :rules="[
          (v) => !!v || 'Contact No is required',
          (v) => /^[0-9]{11}$/.test(v) || 'Must be 11 digits',
        ]"
        :counter="11"
        label="Contact No"
        required
      ></v-text-field>

      <v-text-field
        v-model="addStaff.email"
        :rules="[
          (v) => !!v || 'E-mail is required',
          (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ]"
        label="E-mail"
        required
      ></v-text-field>

      <v-select
        v-model="type"
        :items="types"
        :rules="[(v) => !!v || 'Item is required']"
        label="Staff Type"
        required
      ></v-select>

      <v-btn width="100%" style="background: springgreen" @click="save">
        Save
      </v-btn>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { StaffsInterface } from "@/interfaces/staffs.interface";

export default class AddComponent extends Vue {
  valid = true;

  types = ["Admin", "Employees"];

  addStaff: StaffsInterface = {
    id: "",
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    type: "",
  };
}
</script>
