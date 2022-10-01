import Vue from "vue";
import Vuex from "vuex";
import { StaffsInterface } from "@/interfaces/staffs.interface";

Vue.use(Vuex);

export interface StateInterface {
  admins: StaffsInterface[];
  employees: StaffsInterface[];
}

export default new Vuex.Store<StateInterface>({
  state: {
    admins: [],
    employees: [],
  },
  getters: {
    //for admin
    getAdmins: (state) => state.admins,
    getAdmin: (state) => (id: string) =>
      state.admins.find((admin) => admin.id === id),

    //for employee
    getEmployees: (state) => state.employees,
    getEmployee: (state) => (id: string) =>
      state.employees.find((employee) => employee.id === id),
  },
  mutations: {
    //for admin
    addingAdmin: (state, newAdmin) => state.admins.push(newAdmin),
    removingAdmin: (state, id) =>
      (state.admins = state.admins.filter((admin) => admin.id != id)),

    //for employee
    addingEmployee: (state, newEmployee) => state.admins.push(newEmployee),
    removingEmployee: (state, id) =>
      (state.employees = state.employees.filter(
        (employee) => employee.id != id
      )),
  },
  actions: {
    //for admin
    addAdmin: ({ commit }, newAdmin) => commit("addingAdmin", newAdmin),
    removeAdmin: ({ commit }, id) => commit("removingAdmin", id),

    //for employee
    addEmployee: ({ commit }, newEmployee) =>
      commit("addingEmployee", newEmployee),
    removeEmployee: ({ commit }, id) => commit("removingEmployee", id),
  },
});
