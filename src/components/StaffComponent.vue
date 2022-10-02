<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="staffs"
      sort-by="id"
      class="elevation-1"
      :search="search"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-row>
            <v-col class="col-9">
              <v-dialog v-model="dialog" max-width="500px" persistent>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    New Staff
                  </v-btn>
                </template>
                <v-card class="text-center">
                  <v-card-title
                    class="justify-center"
                    style="
                      background: linear-gradient(to right, #fc00ff, #00dbde);
                    "
                  >
                    Add New Staff
                  </v-card-title>
                  <v-form ref="form" class="mx-5" lazy-validation>
                    <v-text-field
                      v-model="staff.id"
                      :rules="[(v) => !!v || 'ID is required']"
                      label="Staff ID"
                      required
                    ></v-text-field>

                    <v-text-field
                      v-model="staff.firstName"
                      :rules="[(v) => !!v || 'First Name is required']"
                      label="First Name"
                      required
                    ></v-text-field>

                    <v-text-field
                      v-model="staff.lastName"
                      :rules="[(v) => !!v || 'Last Name is required']"
                      label="Last Name"
                      required
                    ></v-text-field>

                    <v-text-field
                      v-model="staff.contact"
                      :rules="[
                        (v) => !!v || 'Contact No is required',
                        (v) => /^[0-9]{11}$/.test(v) || 'Must be 11 digits',
                      ]"
                      :counter="11"
                      label="Contact No"
                      required
                    ></v-text-field>

                    <v-text-field
                      v-model="staff.email"
                      :rules="[
                        (v) => !!v || 'E-mail is required',
                        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                      ]"
                      label="E-mail"
                      required
                    ></v-text-field>

                    <v-select
                      v-model="staff.type"
                      :items="types"
                      :rules="[(v) => !!v || 'Item is required']"
                      label="Staff Type"
                      required
                    ></v-select>

                    <v-btn
                      width="100%"
                      style="background: springgreen"
                      @click="save"
                    >
                      Save
                    </v-btn>
                    <v-btn width="100%" class="red my-5" @click="closeDialog">
                      Close
                    </v-btn>
                  </v-form>
                </v-card>
              </v-dialog>
              <v-dialog
                v-model="deleteDialog"
                :width="$vuetify.breakpoint.smAndDown ? '100%' : '25%'"
                persistent
              >
                <v-card>
                  <v-card-title
                    :class="
                      $vuetify.breakpoint.smAndDown
                        ? 'text-caption justify-center'
                        : 'text-subtitle-1 justify-center'
                    "
                  >
                    {{ deleteText + '"' + editedStaff.id + '" ?' }}
                  </v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red" text @click="deleteDialog = false"
                      >Cancel</v-btn
                    >
                    <v-btn color="green" text>OK</v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
            <v-col class="col-3">
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                hide-details
              ></v-text-field>
            </v-col>
          </v-row>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editStaff(item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import AddComponent from "@/components/forms/AddComponent.vue";
import { StaffsInterface } from "@/interfaces/staffs.interface";

@Component({
  components: {
    AddComponent,
  },
})
export default class StaffComponent extends Vue {
  @Prop(Number) selectedTab!: number;

  types = ["Admin", "Employees"];

  staff: StaffsInterface = {
    id: "",
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    type: "",
  };

  deleteDialog = false;

  dialog = false;

  search = "";

  editedIndex = -1;

  cardTitle = "";

  deleteText = "Are you sure you want to delete this staff ";

  editedStaff: StaffsInterface = {
    id: "",
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    type: "",
  };

  headers: unknown = [
    { text: "Staff ID", align: "start", sortable: true, value: "id" },
    { text: "First Name", sortable: false, value: "firstName" },
    { text: "Last Name", sortable: false, value: "lastName" },
    { text: "Contact No", sortable: false, value: "contact" },
    { text: "Email", sortable: false, value: "email" },
    { text: "Actions", sortable: false, value: "actions" },
  ];

  staffs: any[] =
    this.selectedTab === 0
      ? this.$store.getters.getAdmins
      : this.$store.getters.getEmployees;

  save(): void {
    if (this.staff.type === "Admin") {
      this.$store.dispatch("addAdmin", { ...this.staff });
    } else {
      this.$store.dispatch("addEmployee", { ...this.staff });
    }
    this.staff.id = "";
    this.staff.firstName = "";
    this.staff.lastName = "";
    this.staff.contact = "";
    this.staff.email = "";
    this.staff.type = "";
    this.dialog = false;
  }

  closeDialog(): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    this.$refs.form.resetValidation();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    this.$refs.form.reset();
    this.dialog = false;
  }

  editStaff(staff: any): void {
    console.log(staff);
  }

  deleteItem(staff: any): void {
    this.editedIndex = this.staffs.indexOf(staff);
    this.editedStaff = Object.assign({}, staff);
    this.deleteDialog = true;
  }
}
</script>
