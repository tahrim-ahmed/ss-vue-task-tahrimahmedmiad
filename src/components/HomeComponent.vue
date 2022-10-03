<template>
  <div class="gradient-bg">
    <v-container>
      <v-row>
        <v-col class="col-md-6 col-12 font-weight-bold">
          <div
            :class="
              $vuetify.breakpoint.smAndDown ? 'welcome-mobile' : 'welcome'
            "
          >
            Staff Management System
          </div>
          <div
            :class="
              $vuetify.breakpoint.smAndDown ? 'sub-text-mobile' : 'sub-text'
            "
          >
            Manage all your staffs in single app!
          </div>
        </v-col>
        <v-col class="col-md-6 col-12">
          <img src="team.png" width="90%" class="mt-5" alt="team" />
        </v-col>
      </v-row>
      <v-divider class="ma-10" />
      <v-row>
        <v-col class="col-md-6 col-12">
          <v-card
            class="mx-auto staff-card"
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
                <img src="admin.png" alt="admin"/>
              </v-list-item-avatar>
            </v-list-item>
          </v-card>
        </v-col>
        <v-col class="col-md-6 col-12">
          <v-card
            class="mx-auto staff-card"
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
                <img src="employee.jpg" alt="employee"/>
              </v-list-item-avatar>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class HomeComponent extends Vue {
  getAdmins(): number {
    return this.$store.getters.getAdmins.length;
  }

  getEmployees(): number {
    return this.$store.getters.getEmployees.length;
  }
}
</script>

<style lang="css">
.gradient-bg {
  background: linear-gradient(to right, #fc00ff, #00dbde);
}

.staff-card {
  background: linear-gradient(to right, #00c9ff, #92fe9d);
}

.welcome {
  font-size: 400%;
  margin-top: 35%;
}

.welcome-mobile {
  font-size: 180%;
  text-align: center;
}

.sub-text {
  font-size: 200%;
}

.sub-text-mobile {
  text-align: center;
}
</style>
