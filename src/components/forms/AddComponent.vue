<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
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

      <v-btn class="mr-4"> Save </v-btn>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default class AddComponent extends Vue {
  valid = true;

  addStaff: any = {
    id: "",
    firstName: "",
    lastname: "",
    contact: "",
    email: "",
  };
}
</script>
